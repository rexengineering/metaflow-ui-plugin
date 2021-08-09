module.exports = (config, { isProd, isDev, isTest }) => {
  const { module: { rules } } = config;
  const svgLoader = [
    {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000'
    }
  ];
  return {
    ...config,
    module: {
      rules: [
        ...rules,
        ...svgLoader
      ]
    }
  };
}
