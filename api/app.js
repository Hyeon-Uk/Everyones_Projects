const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const authRouter=require('./routes/auth');
const {sequelize} = require('./models/index');

app.use(cors());
app.use(bodyParser.json());

sequelize.sync();
dotenv.config();



app.listen(8000,()=>{
    console.log("Api server open");
});
app.use('/auth',authRouter);