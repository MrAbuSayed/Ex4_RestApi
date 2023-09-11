const {v4: uuidv4}=require('uuid');
let users = require('../model/rest.model');


const getUser=(req,res)=>{
    res.status(200).json(users);
}


const addUser=(req,res)=>{
    const username= req.body.username;
    const email= req.body.email;
    const user={
     id:uuidv4(),
     username,
     email
    };
    users.push(user);
    res.status(200).json({
     users
    })
 };


  const updateUser=(req,res)=>{
    const userid=req.params.id;
    const username= req.body.username;
    const email= req.body.email;
     users.filter(user=>user.id ===userid).map(selectedUsr=>{
        selectedUsr.username=username,
        selectedUsr.email=email
     })
   
    res.status(200).json(users);
};


    const deleteUser=(req,res)=>{
        const  userId= req.params.id;
        users=users.filter(user=>user.id !==userId);
        res.status(202).json(users);
     };


 module.exports={getUser,addUser,updateUser,deleteUser};