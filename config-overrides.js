const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@body-background': '#282c34',
            '@primary-color': '#49c5b6',
            "@link-color": '#ffffff'
        },
     }),
);