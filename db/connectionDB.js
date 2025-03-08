import mongoose from 'mongoose';
import '../Utility/cronOTP.js'
//* Connect to Db
const connectiontDB = async () => {
    return await mongoose.connect("mongodb://127.0.0.1/jobSearchApp")
        .then(() => {
            console.log('✔ Mongoose Db is Connected Successfully ');
            console.log(`------------------------------------------------------`)
        })
        .catch((err) => {
            console.log({ msg: '❌ Mongoose Db connection Error: ', err });
        });
};

export default connectiontDB;
