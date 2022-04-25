import { configMetaDefault } from '~/configs';

type CreateMeta = {
  title: string;
  description: string;
  name?: string;
  color?: string;
  ogImageAlt?: string;
  ogImageUrl?: string;
  twiterImageUrl?: string;
  url?: string;
  route?: string;
  locale?: string;
};

export const createMetaData = (meta = configMetaDefault) => {
  const {
    title,
    description,
    name,
    color,
    ogImageAlt,
    ogImageUrl,
    twiterImageUrl,
    url,
    route,
    locale,
  }: CreateMeta = meta;

  return {
    title: title || name || configMetaDefault.title,
    description: description || configMetaDefault.description,

    'application-name': name || title || configMetaDefault.name,
    'apple-mobile-web-app-title': title || name || configMetaDefault.title,
    'theme-color': color || configMetaDefault.color,
    'msapplication-TileColor': color || configMetaDefault.color,
    'msapplication-config': url || `${configMetaDefault.url}browserconfig.xml`,

    'og:site_name': name || title || configMetaDefault.name,
    'og:title': title || name || configMetaDefault.title,
    'og:description': description || configMetaDefault.description,
    'og:locale': locale || configMetaDefault.locale,
    'og:url': route
      ? `${configMetaDefault.url}${route}`
      : url || configMetaDefault.url,
    'og:image:alt': ogImageAlt || title || configMetaDefault.ogImageAlt,
    'og:image:type': configMetaDefault.ogImageType || 'image/jpeg',
    'og:image': ogImageUrl
      ? configMetaDefault.url + ogImageUrl
      : configMetaDefault.url + configMetaDefault.ogImageUrl,

    'twitter:card': 'summary_large_image',
    'twitter:site': '@poinswap',
    'twitter:creator': '@poinswap',
    'twitter:title': title || name || configMetaDefault.title,
    'twitter:description': description || configMetaDefault.description,
    'twitter:image': twiterImageUrl
      ? configMetaDefault.url + twiterImageUrl
      : configMetaDefault.url + configMetaDefault.twiterImageUrl,

    'fb:app_id': configMetaDefault.fbAppId,
  };
};
