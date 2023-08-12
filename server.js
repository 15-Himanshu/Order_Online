// const express=require('express');
// const path=require('path');
// const bodyparser=require('body-parser');
// const data=require('./mongodb');
// const app=express();

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(express.static(__dirname));
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/login.html');
// })

// app.post('/login',(req,res)=>{
//    res.send('login successfully');
//    const data=data.find({email:req.body.email});
//    if(emaildata.email==req.body.email && emaildata.password==req.body.password){
//     res.sendFile('/home.html');
//    }
// })
// app.post('/signup',(req,res)=>{
//     res.send(req.body);
//     const emaildata=req.body.email;
//    const passworddata=req.body.password;
//    const data=data.find({email:req.body.email});
//    data.insertMany([{email:emaildata,password:passworddata}]);
//    res.sendFile('/home.html');
// })
// app.listen(3000,()=>{
//     console.log('server is running on port:3000');
// })