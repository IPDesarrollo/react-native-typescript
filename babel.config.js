module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs'],
          include: ['./src/**/*.ts'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@screens': './src/screens/',
            '@type': './src/type/',
            '@interfaces': './src/interfaces/',
            '@interceptors': './src/interceptors/',
            '@context': './src/context/',
            '@services': './src/services/',
          },
        },
      ],
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  };
};
