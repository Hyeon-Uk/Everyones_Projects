const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const authRouter=require('./routes/auth');
const postRouter=require('./routes/post');
const userRouter=require('./routes/user');

const {sequelize} = require('./models/index');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
sequelize.sync();
dotenv.config();



app.listen(8000,()=>{
    console.log("Api server open");
});
app.use('/auth',authRouter);
app.use('/post',postRouter);
app.use('/user',userRouter);