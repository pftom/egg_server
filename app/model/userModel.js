modules.exports = app => {
    /*
     * get the instance of mongoose
     * which is mount on app.
     */ 

    const mongoose = app.mongoose;
    const UserSchema = new mongoose.Schema({
        userName: { type: String, unique: true,  },
        password: { type: String },
    });

    return mongoose.model('Users', UserSchema);
}
