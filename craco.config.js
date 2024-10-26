module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.optimization.minimizer[0].options.terserOptions.ecma = 2015;
        return webpackConfig;
      },
    },
  };
  