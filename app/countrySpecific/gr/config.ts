import { Config } from '../../domain/types';

export const countrySpecificConfig: Config = {
  BASE_URL: 'coronastatus.gr',
  COUNTRY_CODE: 'gr',
  DB_PATH: './covid_db',
  LOCALE: 'el-GR',
  MAP_CENTER: {
    lat: 39.07,
    lon: 21.82
  },
  MAP_MAX_ZOOM: 13,
  MAP_ZOOM: 5,
  PASSCODE_LENGTH: 4,
  RATE_LIMIT_COUNT: 10, // Maximum number of submissions per IP
  RATE_LIMIT_WINDOW: 86400000, // Time window in milliseconds for rate limiting
  REDIRECT_TO_GOVERNMENT: false,
  SUPPORTED_LOCALES: ['el-GR'],
  THOUSAND_SEPARATOR: ',',
  ZIP_GUIDE: true,
  ZIP_PATTERN: '[12345]{5}',
  ZIP_PLACEHOLDER: '12345'
};
