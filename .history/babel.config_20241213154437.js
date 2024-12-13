module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env', // İstediğiniz herhangi bir modül adı yazılabilir
        path: '.env', // Varsayılan .env dosyasını kullanacak
      },
    ],
  ],
};
