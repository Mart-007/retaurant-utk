import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

import path from 'path';

const env = dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default defineConfig({
  plugins: [react()],

  define: {
    'process.env': JSON.stringify({
      apiKey: env.parsed.API_KEY,
      authDomain: env.parsed.AUTH_DOMAIN,
      databaseURL: env.parsed.DATABASE_URL,
      projectId: env.parsed.PROJECT_ID,
      storageBucket: env.parsed.STORAGE_BUCKET,
      messagingSenderId: env.parsed.MESSAGING_SENDER_ID,
      appId: env.parsed.APP_ID,
    }),
  },
});
