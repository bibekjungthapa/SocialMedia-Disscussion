const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: Number, required: true },
    },
    {
      collection: "forum",
    }
  );
   const Users = mongoose.model("UserModel", UserSchema);
    
module.exports=Users;