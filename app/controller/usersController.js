// app/controller/users.js

// verify login input format
const createLoginRule = {
  username: {
    type: 'string',
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
      const { ctx } = this;
      // verify the input, if not match the input format, throw a exception
      ctx.validate(createRule);
      ctx.body = `user: ${JSON.stringify(this.ctx.request.body)}`;
    }

    * register() {
      const { ctx } = this;
      // verify the input, if not match the input format, throw a exception
      // ctx.validate(createRegisterRule);

      // get all need data from the request body
      const { userName, password, rePassword } = ctx.request.body;
      const body = {
        userName,
        password,
      };

      // 
      // if ( !userName || !password || !rePassword ) {
      //   ctx.body = 'username or password cannot be empty.';
      // } else if ( userName.length !== 9 ) {

      // } else if ( password !== rePassword ) {
      //   ctx.body = 'Two password not consistent';
      // }
      try {
        yield ctx.service.userService.register(body);

        ctx.body = `user: ${userName}, created`;
        ctx.body = 201;
      } catch (e) {
        ctx.body = 'Sorry, register error.';
        ctx.status = 403;
      }
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