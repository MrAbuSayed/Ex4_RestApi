
const express=require("express");
const router=express.Router();

const { addUser, updateUser, getUser,deleteUser } = require("../controller/rest.controller");

router.get("/user/api",getUser);

router.post("/user/api",addUser);
 
 router.put("/user/api/:id",updateUser);
 
 router.delete("/user/api/:id",deleteUser);
 
 module.exports=router;