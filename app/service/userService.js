modules.exports = app => {
    class User extends app.Service {
        * register (body) {
            // get the context of this service
            const { ctx } = this;

            // spread syntax destructing the data from body
            const { userName, password } = body;

            // judge whether this account is exist
            // use userName for query db
            const data = yield ctx.model.userModel.find({ userName });
            // if exist
            if (data) {
                throw new Error('User account exists.');
            } else {
                // if not exists.
                // read & write db for create a new account
                const userAccount =  new ctx.model.User(body);
                // save data to db 
                userAccount.save((err) => {
                    // if show error, throw a new error
                    if (err) {
                        throw new Error("Save db error.");
                    } else {
                        // if save data succeed, return the userName;
                        return userName;
                    }
                });
            }

        }
    }

    return User;
};