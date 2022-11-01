const express = require("express")
const app = express()
const postData=require('../models/post');
const router =express.Router()
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('avatar')

// router.post('/', , function (req, res, next) {
//   console.log(req.file)
//   postData.create(req.body)
// })


router.post("/",upload, async (req, res) => {


    try {
      console.log(req.file)
      req.body.filePath=req.file.path
        postData.create(req.body);
        res.json({
          msg: "post created successfully",
        });
    
    } catch (error) {
    console.log(error)
      
    }

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
  