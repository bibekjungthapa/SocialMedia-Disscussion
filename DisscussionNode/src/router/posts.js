const express = require("express")
const app = express()
const postData=require('../models/post');
const router =express.Router()

router.post("/", async (req, res) => {
    postData.create(req.body);
    res.json({
      msg: "post created successfully",
    });
  });
  
  router.get("/", async (req, res) => {
    const post = await postData.find({});
    res.json({
      post: post,
    });
  });
  
  router.delete("/:id", async (req, res) => {
  try {
    
    const result = await postData.deleteOne({ _id : req.params.id})
    res.json(result)
  
  } catch (error) {
  console.log(error)
    
  }
  })
  

  
  router.put("/:id", async (req, res) => {
  postData.findOneAndUpdate({id:req.params._id},{$set:{Questions: req.body.Question, breifQuestion: req.body.breifQuestion}}) 
  res.json({
    message:"Edit Features Updated"
  })
    })
module.exports=router;
  