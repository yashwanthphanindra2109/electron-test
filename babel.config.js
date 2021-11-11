module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      "react-native-reanimated/plugin",
      [
        "babel-plugin-inline-import",
        {
          extensions: [".svg"],
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            assets: "./src/assets",
            screens: "./src/screens",
            navigation: "./src/navigation",
            config: "./src/config",
            // modules: "./src/modules",
            utils: "./src/utils",
            // environment: "./src/environment",
            // container: "./src/container",
            components: "./src/components",
            // locales: "./src/locales",
            // hooks: "./src/hooks",

          },
        },
      ],
    ],
  };
};
