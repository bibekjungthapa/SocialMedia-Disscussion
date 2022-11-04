const mongoose=require('mongoose')

  const postSchema = new mongoose.Schema(
    {
      Question: { type: String, required: true },
      breifQuestion: { type: String, required: true },
      filePath:{ type: String, required: true },
      
    },
    {
      collection: "post",
    }
  );
  
  const postData = mongoose.model("postModel", postSchema);
  
module.exports=postData;