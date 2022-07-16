const PROD_ENDPOINT = 'https://api.innospace.io';
const DEV_ENDPOINT = 'http://localhost:4000';

export const ENDPOINT =
  process.env.NODE_ENV === 'production' ? PROD_ENDPOINT : DEV_ENDPOINT;
