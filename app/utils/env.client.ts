import { configMeta } from '~/configs';

export const isEnvDevelopment = ENV?.NODE_ENV === 'development';
export const isEnvTest = ENV?.NODE_ENV === 'test';
export const isEnvProduction = ENV?.NODE_ENV === 'production';
export const isSameHostName = configMeta.hostname === window.location.hostname;
export const isProductionAllowed = isEnvProduction && isSameHostName;

console.info({
  isEnvDevelopment,
  isEnvTest,
  isEnvProduction,
  isSameHostName,
  isProductionAllowed,
});
