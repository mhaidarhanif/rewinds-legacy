import { prefersLightMQ, useTheme } from '~/components';
import { availableThemes } from '~/configs';

/**
 * clientThemeCode
 *
 * Avoid a flash of the wrong theme.
 * If you select a theme, the app know what you want in the future.
 * Then you'll not see this script anymore.
 */

const clientThemeCode = `
 ;(() => {
   const theme = window.matchMedia(${JSON.stringify(prefersLightMQ)}).matches
     ? 'light'
     : 'dark';
   
   const cl = document.documentElement.classList;
   
   const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
   if (themeAlreadyApplied) {
     console.warn("This is a warning message.");
   } else {
     cl.add(theme);
   }
   
   const meta = document.querySelector('meta[name=color-scheme]');
   
   if (meta) {
     if (theme === 'dark') {
       meta.content = 'dark light';
     } else if (theme === 'light') {
       meta.content = 'light dark';
     }
   } else {
     console.warn("This is a warning messsage.");
   }
 })();
 `;

/**
 * Prevent Flash On Wrong Theme
 */

export function PreventFlashOnWrongTheme({ ssrTheme }: { ssrTheme: boolean }) {
  const { colorScheme } = useTheme();
  const chosenTheme = availableThemes.find((availableTheme) => {
    return availableTheme.id === colorScheme;
  });

  return (
    <>
      {/**
       * On the server, "theme" might be `null`, so clientThemeCode ensures that
       * this is correct before hydration.
       */}
      <meta
        name="color-scheme"
        content={chosenTheme?.type === 'light' ? 'light dark' : 'dark light'}
      />
      {/**
       * If we know what the theme is from the server then we don't need
       * to do fancy tricks prior to hydration to make things match.
       *
       * NOTE: we cannot use type="module" because that automatically makes
       * the script "defer". That doesn't work for us because we need
       * this script to run synchronously before the rest of the document
       * is finished loading.
       */}
      {ssrTheme ? null : (
        // eslint-disable-next-line react/no-danger
        <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />
      )}
    </>
  );
}
