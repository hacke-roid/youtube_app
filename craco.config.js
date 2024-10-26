module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
          webpackConfig.optimization.minimizer.forEach((minimizer) => {
            if (minimizer.options && minimizer.options.terserOptions) {
              minimizer.options.terserOptions.ecma = 2015;
            }
          });
        }
        return webpackConfig;
      },
    },
  };
  