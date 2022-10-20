const express = require("express");
const app = express();
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    
      req.body["password"] = hash;
      
      Users.create(req.body).then((data) => {
        console.log(data);
      });
    });
  } catch (error) {
  
  }
});
router.post("/login", async (req, res) => {
  try {
    const userExistArr = await Users.find({ email: req.body.email });
    if (userExistArr.length > 0) {
      bcrypt.compare(req.body.password, userExistArr[0].password,function (err, result) {
        const acessToken = jwt.sign(
            { email: req.body.email },
            process.env.JSONTOKEN,
            { algorithm: "RS256" }
          );


          
          console.log(result);
          res.json({
            msg: "found found",
          });
        }
      );
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (error) {}
});

module.exports = router;
