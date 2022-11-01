import {
  MessageOutlined,
  MoreOutlined,
  LikeOutlined,
  LikeFilled,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import Forum from "./forum";
import Postpop from "./postpop";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Home() {
  const [addPostOn, setAddPostOn] = useState(false);
  const [popup, setPopup] = useState(false);
  const [post, setpost] = useState(false);
  const [count, setCount] = useState(0);
  const addQuestion = () => {
    setAddPostOn(true);
  };

  const postpop=()=>{
    setPopup(true)
    // console.log(popup)
  }

  const [postOn, setPostOn] = useState([]);
  const fetchPost = () => {
    console.log("calling fetch");
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.post);
        setPostOn(data.post);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const DeletePost = (item) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        addPostOn: item,
      }),
    };
    console.log(item);
    fetch("http://localhost:8080/posts/" + item._id, requestOptions)
      .then((response) => response.json())
      .then((res) => (res ? fetchPost() : ""));
  };

  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  // const updatePost = (item) => {
  //   const requestOptions = {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       Question: question,
  //       breifQuestion:answer
  //     }),
  //   };
  //   console.log(item);
  //   fetch("http://localhost:8080/posts/", requestOptions)
  //     // .then((response) => response.json())
  //     // .then((res) => (res ? fetchPost() : ""));
  // };




  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/home");
  };

  return (
    <div className="App">
      <div className="App-main">
        <div className="logo">
          <img
            src="https://th.bing.com/th/id/OIP.rbjRcOkWG44xB-HbCG3IPQAAAA?pid=ImgDet&rs=1"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>

        <button
          className="post"
          onClick={() => {
            addQuestion();
          }}
        >
          {" "}
          + Add Question{" "}
        </button>
        {addPostOn ? <Forum fetchPost={() => fetchPost()} /> : null}
      </div>
      {/* <hr /> */}
      <div className="outside-post">


        <div className="Post">
          {postOn.length > 0
            ? postOn.map((item, index) => {
                return (
                  <li>
                    <div className="Style-icon">
                      <DeleteFilled
                        onClick={() => {
                          DeletePost(item);
                        }}
                      />

                      <EditFilled 
                      onClick={() => {
                        postpop();
                      }}
                    />
                  
                    {popup  ? <Postpop/> : null}
                    



                    </div>
                    Q. <b> {item.Question}</b>,<br />
                    <i>{item.breifQuestion}</i>
                    <br />
                    <button
                      className="button"
                      onClick={() => {
                        if (post === true) {
                          setCount(0);
                          setpost(false);
                        } else {
                          setCount(1);
                          setpost(true);
                        }
                      }}
                    >
                      {post === true ? <LikeFilled /> : <LikeOutlined />}
                      {/* {count === 1 ? 1 : 0} */}
                    </button>
                  </li>
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
}

export default Home;
