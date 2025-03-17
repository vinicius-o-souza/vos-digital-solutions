

/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(json|yaml|yml)"
  ],

  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook"
  ],

  "framework": {
    "name": "@storybook/server-webpack5",
    "options": {}
  },

  docs: {
    autodocs: true
  }
};
export default config;