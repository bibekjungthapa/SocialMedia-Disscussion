import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./features/Users/login";
import Register from "./features/Users/register";
import Forum from "./components/forum";
import Home from "./components/home";
import Siderbar from "./components/sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/sidebar" element={<Siderbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
