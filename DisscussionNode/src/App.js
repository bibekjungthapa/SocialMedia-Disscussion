const app = require("express")();
const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
// require('dotenv').config();
require('./db/mongoose')();
const postrouter=require('./router/posts')
const registerrouter=require('./router/users')
app.use('/posts',postrouter)
app.use(registerrouter)
const port= 8080;
// const multer  = require('multer')

app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// })

// const upload = multer({ storage: storage }).single('avatar')

// app.post('/profile', upload, function (req, res, next) {
//   console.log(req.file)
// })
