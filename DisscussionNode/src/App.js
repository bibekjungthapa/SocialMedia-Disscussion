const app = require("express")();

const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
require('dotenv').config();
require('./db/mongoose')();
// const port = 3003
const postrouter=require('./router/posts')
const registerrouter=require('./router/users')
app.use('/posts',postrouter)
app.use(registerrouter)

app.listen(process.env.port, () => {
  console.log(`Server runnning on port ${process.env.port}`);
});

