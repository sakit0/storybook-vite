module.exports = {
  stories: [
    { directory: '../stories', files: '*.story.jsx', titlePrefix: 'foo' }
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  core: {
    builder: 'storybook-builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    return config;
  },
}