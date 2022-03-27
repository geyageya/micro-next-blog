// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'karuta2020',
  apiKey: process.env.API_KEY,
});