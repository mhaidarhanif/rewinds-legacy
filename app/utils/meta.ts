import { configMeta } from "~/configs";

type CreateMeta = {
  title: string;
  description: string;
  name?: string;
  color?: string;
  ogType?: string;
  ogImageAlt?: string;
  ogImageUrl?: string;
  twiterImageUrl?: string;
  url?: string;
  route?: string;
  locale?: string;
};

export const createMetaData = (meta = configMeta) => {
  const {
    title,
    description,
    name,
    color,
    ogType,
    ogImageAlt,
    ogImageUrl,
    twiterImageUrl,
    url,
    route,
    locale,
  }: CreateMeta = meta;

  return {
    title: title || name || configMeta.title,
    description: description || configMeta.description,

    "application-name": name || title || configMeta.name,
    "apple-mobile-web-app-title": title || name || configMeta.title,
    "theme-color": color || configMeta.color,
    "msapplication-TileColor": color || configMeta.color,
    "msapplication-config": url || `${configMeta.url}/browserconfig.xml`,

    "og:site_name": name || title || configMeta.name,
    "og:title": title || name || configMeta.title,
    "og:description": description || configMeta.description,
    "og:locale": locale || configMeta.locale,
    "og:url": route ? `${configMeta.url}/${route}` : url || configMeta.url,
    "og:type": ogType || configMeta.ogType,
    "og:image:alt": ogImageAlt || title || configMeta.ogImageAlt,
    "og:image:type": configMeta.ogImageType || "image/jpeg",
    "og:image": ogImageUrl
      ? `${configMeta.url}/${ogImageUrl}`
      : `${configMeta.url}/${configMeta.ogImageUrl}`,

    "twitter:card": "summary_large_image",
    "twitter:site": "@poinswap",
    "twitter:creator": "@poinswap",
    "twitter:title": title || name || configMeta.title,
    "twitter:description": description || configMeta.description,
    "twitter:image": twiterImageUrl
      ? `${configMeta.url}/${twiterImageUrl}`
      : `${configMeta.url}/${configMeta.twiterImageUrl}`,

    "fb:app_id": configMeta.fbAppId,
  };
};
