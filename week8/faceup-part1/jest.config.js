module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^react-native$': 'react-native-web',
    },
  };
  