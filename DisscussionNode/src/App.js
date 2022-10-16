const app = require("express")();
// const app = express();
const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
// const port=require('dotenv').config();
require('./db/mongoose')();
const Users=require('./models/user');
const postData=require('./models/post');
const port = 3003



app.post("/register", async (req, res) => {
  Users.create(req.body);
  res.json({ msg: "Hey good morning" });
});

app.post("/posts", async (req, res) => {
  postData.create(req.body);
  res.json({
    msg: "post created successfully",
  });
});

app.get("/posts", async (req, res) => {
  const post = await postData.find({});
  res.json({
    post: post,
  });
});

app.delete("/posts/:id", async (req, res) => {
try {
  
  const result = await postData.deleteOne({ _id : req.params.id})
  res.json(result)

} catch (error) {
console.log(error)
  
}
})

// app.put("/posts", async (req, res) => {
// postData.findByIdAndUpdate(req.body) 
// res.json({
//   message:"Edit Features Updated"
// })
//   })

  // console.log(req.params)

app.post("/login", async (req, res) => {
  const userExistArr = await Users.find({ email: req.body.email });
  if (userExistArr.length > 0) {
    res.json({
      message: "USer USer found  found",
    });
  } else {
    res.json({ message: "USerfound not found " });
  }
});

app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});

