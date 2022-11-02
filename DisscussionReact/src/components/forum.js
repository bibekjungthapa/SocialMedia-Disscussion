import "./forum.css";
import { FileImageOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const Forum = (props) => {
  const [whatMind, setWhatsMind] = useState("");
  const [breif, setBreif] = useState("");
  const [file, setFile] = useState("");

  
  const submitFunc = () => {
    const formData=new FormData();
    formData.append("avatar", file[0])
    formData.append('Question', whatMind)
    formData.append('breifQuestion', breif)
    
    
    fetch("http://localhost:8080/posts",{
    method:'POST',
    body:formData,
    dataType:'jsonp'
    })
    setWhatsMind("");
    setBreif("");
  };
  
const handelfile=event=>{

  setFile(event.target.files)

  // console.log(URL.createObjectURL(event.target.files[0]))
}

  return (
    <div className="App">
      <div className="post-Forum">
        <div className="container-forum">
          <h2>What do you want to ask ?</h2>
          <input
            type="text"
            placeholder="Whats your question"
            value={whatMind || ""}
            onChange={(e) => setWhatsMind(e.target.value)}
          ></input>
          <textarea
            placeholder="Brief your question"
            value={breif || ""}
            onChange={(e) => setBreif(e.target.value)}
          ></textarea>

          <br />
          <FileImageOutlined />
          <hr></hr>

          <input placeholder="type sth" type="file"  name="avatar"  onChange={handelfile}>
</input>
   <hr></hr>
          <button onClick={() => submitFunc()}>Post</button>
        </div>

      </div>
    </div>
  );
};

export default Forum;
