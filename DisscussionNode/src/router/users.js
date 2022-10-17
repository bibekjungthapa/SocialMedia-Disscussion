const express = require("express")
const app = express()
const Users=require('../models/user');
const router =express.Router()


router.post("/", async (req, res) => {
    Users.create(req.body);
    res.json({ msg: "Hey good morning" });
  });

  
router.post("/login", async (req, res) => {
  console.log("hey hey")
    const userExistArr = await Users.find({ email: req.body.email });
    if (userExistArr.length > 0) {
      res.json({
        message: "USer USer found  found",
      });
    } else {
      res.json({ message: "USerfound not found " });
    }
  });
  
  module.exports=router;