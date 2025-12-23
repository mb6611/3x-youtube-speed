import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: '3x - YouTube Speed Boost',
    description: 'Watch YouTube at 3x, 4x, 5x and more.',
    permissions: ['activeTab'],
    host_permissions: ['*://*.youtube.com/*'],
  },
});
