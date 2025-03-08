// *===> import Express, Bootstrap
import express from 'express';
import { bootstrap } from './src/app.controller.js';
import './Utility/cronOTP.js'


(async ()=>{
//*===>  Express Server
const app = express();
const port =  process.env.PORT || 3000;

// ^--------> app start from here 
await bootstrap(app,express)

// *===> Express Listeneing on Port 
app.listen(port, () => {
    console.log(`----------------Connection Checks--------------------`)
    console.log(`✔ Express Server Running on port ${port}! `)}
);

})(); 