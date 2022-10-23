const express = require("express");
const app = express();
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const router = express.Router();
const secretKey = '359438fa6610e9f997c3cfae013b91bf0bc60b48b172d68ee45787ed66ec574804d0977dfe063f7e2311df7943880ee8d6c11cc23a10fb052f13cb1021d2db06'
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
            secretKey
          );
          Users.findOneAndUpdate({ email: req.body.email }, {
            $set: {
              token: acessToken
            }
          })
      
          .then(result => {
            res.json({
              msg: "found found",
              genToken: acessToken
            });
          })
        }
      )
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
