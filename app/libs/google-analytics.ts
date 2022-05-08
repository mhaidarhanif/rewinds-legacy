import ReactGA from 'react-ga4';

export { ReactGA };

export const googleAnalyticsInit = () => {
  if (ENV.GA_MEASUREMENT_ID) {
    ReactGA.initialize(String(ENV.GA_MEASUREMENT_ID));
  }
};
