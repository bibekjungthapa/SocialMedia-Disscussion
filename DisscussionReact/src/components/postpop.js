import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import "./pop.css";
const Postpop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className='pop'>  
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </div>

    </>
  );
};

export default Postpop;






















// import "./pop.css";

// import { FileImageOutlined } from "@ant-design/icons";
// import { useState, useEffect } from "react";
// const Postpop = (props) => {
  
//   return (
//     <div className="App">
//       <div className="pop-container">
        
//           <h2>What do you want to ask ?</h2>
//           <input
//             type="text"
//             placeholder="Whats your question"
//           ></input>
//           <textarea
//             placeholder="Brief your question" ></textarea>

//           <br />
//           <FileImageOutlined />
//           <hr></hr>

//           <button>Save</button>
//         </div>
//       </div>
    
//   );
// };

// export default Postpop;
