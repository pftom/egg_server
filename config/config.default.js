// add cookies keys
exports.keys = 'ihaveabigdream';

// add template engine
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// add data config
exports.mysql = {
  client: {
    host: 'mysql.com',
    port: '3306',
    user: 'test_user',
    password: 'test_password',
    database: 'test_one',
  },
  app: true,
  agent: false,
};