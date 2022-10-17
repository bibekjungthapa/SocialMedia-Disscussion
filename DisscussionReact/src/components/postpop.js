import "./pop.css";

import { FileImageOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const Postpop = (props) => {
  
  return (
    <div className="App">
      <div className="pop-container">
        
          <h2>What do you want to ask ?</h2>
          <input
            type="text"
            placeholder="Whats your question"
          ></input>
          <textarea
            placeholder="Brief your question" ></textarea>

          <br />
          <FileImageOutlined />
          <hr></hr>

          <button>Save</button>
        </div>
      </div>
    
  );
};

export default Postpop;
