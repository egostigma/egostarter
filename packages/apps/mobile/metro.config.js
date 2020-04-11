// const { createMetroConfiguration } = require('@dotplants/expo-yarn-workspaces');

// module.exports = createMetroConfiguration(__dirname);

const path = require('path')

module.exports = {
  projectRoot: path.resolve(__dirname, '../../..'),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
