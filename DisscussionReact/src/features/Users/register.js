import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [button, setButton] = useState("");

  const callingFunc = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username,
        password: password,
        email: email,
      }),
    };
    fetch("http://localhost:8080/register", requestOptions);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Register Here</h1>
        <div className="register">
          <input
            type="text"
            placeholder="Enter Username"
            onKeyUp={(e) => setUsername(e.target.value)}
          ></input>

          <input
            type="Email"
            placeholder="Enter Email"
            onKeyUp={(e) => setEmail(e.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Enter Password"
            onKeyUp={(e) => setPassword(e.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Confirm Password"
            onKeyUp={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <button onClick={() => callingFunc()}>Register</button>
          <p>Already have an account</p>
          <Link to="/login">Login</Link>
        </div>
        <div className="link">
          <Link to="/home">Main</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
