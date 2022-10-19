const express = require("express")
const app = express()
const Users=require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router =express.Router()

router.post("/register", async (req, res) => {

  try {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      // console.log(hash)
      req.body['password'] = hash;
      console.log(req.body)
       Users.create(req.body).then((data)=>{
        console.log(data)
       })
      // Store hash in your password DB.
  });
  } catch (error) {
    // "error"
  }}
  



 
    // res.json({ msg: "Hey good morning" });
  );







  
router.post("/login", async (req, res) => {
 try {

  const userExistArr =await Users.find({ email: req.body.email })
  if(userExistArr.length>0){
    console.log(userExistArr)
    bcrypt.compare(req.body.password, userExistArr[0].password, function(err, result) {
console.log(result)
  });

 }else{
  res.json({
    msg:"user not found"
  })
 }
}  catch (error) {
  
 }
  
});   















  
  module.exports=router;