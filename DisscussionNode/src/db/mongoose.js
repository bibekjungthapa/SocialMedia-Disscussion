const mongoose = require("mongoose");
const appConfig=require('../../config/app-config.json')
const connectionString=appConfig.mongodb_URI

  async function connect() {
    try {
      mongoose.connect(connectionString, { useNewUrlparser: true, useUnifiedTopology: true });
      console.log("Connected to mongodb");
    } catch (error) {
      console.log(error);
    }
  }
//   connect();

module.exports=connect