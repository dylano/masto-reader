import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run start',
    port: 5100,
  },
  testDir: 'e2e',
  timeout: 10000,
};

export default config;
