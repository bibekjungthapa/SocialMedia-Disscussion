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
  const userExistArr =Users.find({ password: req.body.password });
  console.log(userExistArr)
try {

  bcrypt.compare(req.body.password, userExistArr.password, function(err, result) {
    console.log(result)

    // if (userExistArr.length > 0) {
    //     res.json({
    //       message: "USer USer found  found",
    //     });
    //   } else {
    //     res.json({ message: "USerfound not found " });
    //   }
  
});   

} catch (error) {
  
}













  // console.log("hey hey")
  //   const userExistArr = await Users.find({ email: req.body.email });
  //   if (userExistArr.length > 0) {
  //     res.json({
  //       message: "USer USer found  found",
  //     });
  //   } else {
  //     res.json({ message: "USerfound not found " });
  //   }
});
  
  module.exports=router;