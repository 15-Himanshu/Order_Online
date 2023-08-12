const express=require('express')
const app=express();
const bodyparser=require('body-parser');
const port=80;
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/values');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname));
const signupschema=new mongoose.Schema({
    email:String,
    password:String
})
const signupmodel=mongoose.model('signupdata',signupschema);
app.get('/',(req,res)=>{
    res.send('hello');
    // res.sendFile(__dirname+'/login.html');
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/signup.html');
})
app.post('/login',(req,res)=>{
    const emailvalue=req.body.email;
    const passwordvalue=req.body.password;
    
   const databasevalue= signupmodel.findOne({email:emailvalue,password:passwordvalue});
   if(databasevalue.email==emailvalue && databasevalue.password==passwordvalue){
    res.sendFile(__dirname+'/home.html');
   }
   else{
    res.send('no data found');
   }
     
})
app.post('/signup',(req,res)=>{
    const emailvalue=req.body.email;
    const passwordvalue=req.body.password;
   const databasevalue= signupmodel.findOne({email:emailvalue,password:passwordvalue});
   if(databasevalue.email==emailvalue && databasevalue.password==passwordvalue){
    res.send('Email already registered');
   }
   else{
    signupmodel.insertMany({email:emailvalue,password:passwordvalue});
    res.sendFile(__dirname+'/home.html');
   }
     
})
app.listen(80,(req,res)=>{
    console.log(`server is running on it port:${port}`);
})