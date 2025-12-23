import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: '3x - YouTube Speed Boost',
    description: 'Break the 2x limit. Watch YouTube at 3x, 4x, 5x and beyond.',
    permissions: ['activeTab'],
    host_permissions: ['*://*.youtube.com/*'],
  },
});
