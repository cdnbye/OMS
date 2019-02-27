const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const configAlias = ['~', '@'].reduce((result, symbol) =>
  ['', 'assets', 'components', 'pages', 'plugins', 'static', 'store', 'api'].reduce((iResult, dir) =>
    Object.assign({}, iResult, {
      [`${symbol}${dir}`]: resolve(`/src/${dir}`),
  }), result), {});

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: configAlias,
    symlinks: false,
  },
};
