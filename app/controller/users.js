// app/controller/users.js

// verify login input format
const createLoginRule = {
  username: {
    type: 'number',
  },
  password: {
    type: 'string',
  },
};

// verify register input format
const createRegisterRule = Object.assign( {}, createLoginRule, { 're-password': { type: 'string' } } );

module.exports = app => {
  class UserController extends app.Controller {
    * login() {
      // verify the input, if not match the input format, throw a exception
      this.ctx.validate(createRule);
      this.ctx.body = `user: ${JSON.stringify(this.ctx.request.body)}`;
    }

    * register() {
      // verify the input, if not match the input format, throw a exception
      this.ctx.validate(createRegisterRule);
      this.ctx.body = `user: ${this.ctx.request.body}`;
    }

    * getProfile() {
      this.ctx.body = `user: ${this.ctx.request.body}`;
    }

    * updateProfile() {
      this.ctx.body = `user: ${this.ctx.request.body}`;
    }
  }
  return UserController;
};