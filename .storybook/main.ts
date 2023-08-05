import type { StorybookConfig } from "@storybook/react-webpack5";
import custom from "../webpack.config.js";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    // 모든 컴포 파일에 docs파일 만들기
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
      ];
    }
    return {
      ...config,
      module: { ...config.module, rules: [...(config.module as any).rules, ...custom.module.rules] },
    };
  },
};
export default config;
