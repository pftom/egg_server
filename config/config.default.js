// add cookies keys
exports.keys = 'ihaveabigdream';

// add template engine
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// mongoose config here
exports.mongoose = {
  url: 'mongodb://127.0.0.1/example',
  options: {},
};