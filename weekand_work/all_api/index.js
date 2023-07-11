const express =require('express');
const joi =require('joi');
const users=require('./data');
const app =express();


const bodyParser= require('body-parser');
app.use(bodyParser.json());

const multer =require('multer');
port =5000;

// joi schema make  
const schema=joi.object({
  name:joi.string().min(2).max(15).required(),
  email:joi.string().email().required(),
  gender:joi.string().required()

})
// multer for file 
const fileStorage=multer({
    storage: multer.diskStorage({
        destination:(req, file ,cb)=>{
            cb(null ,'upload')
    
        },
        filename:(req,file,cb)=>{
            cb(null,`file${file.fieldname}`)
        }
    })
}).any();

  
//   const upload = multer({storage })

// get api make
app.get('/user',(req,res)=>{
    res.json(users)
})
// specific user come by specific get request
app.get('/user/:id',(req,res)=>{
    let id =req.params.id;
    
    let index= users.findIndex((value)=>{
        return (value.id== Number.parseInt(id));

    })
        if(index>=0){
            let std= users[index];
            // delete object
            // users.splice(index,1);
            res.json(std);
        }else{
            return res.status(400);
        }   

})

app.post('/img',fileStorage,(req,res)=>{
    res.send("imge is succesfully upload");
})
// post api make with perfect validation of user
app.post('/user',(req,res)=>{
    const {error}=schema.validate(req.body);
    if(error){
        res.status(400).json({"error":"carefully enter the values"});
    }

     
    const std={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender
    }

    res.status(200).json({message:"successfuly added user",std});
    users.push(std);

})

// put 
app.put('/user/:id',(req,res)=>{

    let id =req.params.id;
    let name=req.body.name;
    let email=req.body.email;
    let gender=req.body.gender;

    console.log(req.params.id);
    res.json(req.body);
   

    let index= users.findIndex((value)=>{
        return (value.id== Number.parseInt(id));

    })
        if(index>=0){
            let std= users[index];
            std.name=name;
            std.email=email;
            std.gender=gender;
            res.json(std);
        }else{
            return res.status(400);
        }   

})


// delete

app.delete('/user/:id',(req,res)=>{
    let id =req.params.id;
    
    let index= users.findIndex((value)=>{
        return (value.id== Number.parseInt(id));

    })
        if(index>=0){
            let std= users[index];
            // delete object
            users.splice(index,1);
        }else{
            return res.status(400);
        }   

})
// server started 
app.listen(port,()=>{
    console.log(`server start in port ${port}`);
})


