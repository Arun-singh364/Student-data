// imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//const bodyParser = require('body-parser')
const User = require('./models/signup')
const app = express()
//db connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/studentscore')
mongoose.connection.on('connected',()=>{
    console.log('Database is connected');
})
mongoose.connection.on('error',()=>{
    console.log('error occured');
})
//middlewares
app.use(cors())
app.use(express.json())


//routes
app.get('/userdata',(req,res)=>{
    User.find().sort({percent:-1})
    .exec()
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})

app.get('/search',(req,res)=>{
    console.log(req.body.sname)
    User.find({name:req.body.sname})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})

app.post('/signup',(req,res)=>{
    
    const user = new  User({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        roll : req.body.roll,
        chem: req.body.chem,
        phys: req.body.phys,
        math: req.body.math,
        total:(parseInt(req.body.chem)+parseInt(req.body.phys)+parseInt(req.body.math)),
        percent:((parseInt(req.body.chem)+parseInt(req.body.phys)+parseInt(req.body.math))/3).toFixed(2),
    
          });
    user.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"succesfully submitted"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error occured"});
    })
})

// app.post('/login', (req, res) => { 
  
//      let user = User.findOne({ email: req.body.email });
//      if(!user){
//          res.status(400).send("Invalid email or password");
//      } 
//         else {
//     User.findOne({ email: req.body.email , password:req.body.password})
//     .exec()
//     .then(result=>{
//         // console.log(result);
//         res.send(result);
//     })
//     .catch(err=>{
//         res.status(500).send(err);
//     })    
// }

// });

// app.put('/updatepassword/:id',(req,res)=>{
//     const eid = req.params.id;
//     const Npassword=req.body.password;
//     User.update({email:eid},{$set:{password:Npassword}})
//     .then(result=>{
//         console.log(result.n);
//         res.send(result);
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"error occurred"});
//     })
// })



//server
app.listen(5000,()=>{
    console.log('server was connected on port:5000')
})