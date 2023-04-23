import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import front from "../assests/front.jpg";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [cnfrmpassword, setcnfrmpassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await axios.post("http://localhost:5002/signup", {
      userName: name,
      userEmail: email,
      userPassword: password,
    });
    navigate("/login")
  }

  return (
    <div
      style={{
        backgroundImage: `url(${front})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <h1 style={{marginRight: "80%"}} className="title">PriorityPlus</h1>
      <div className="card">
        <p style={{fontSize:"25px",color:"#FFE5B4",}}>Signup</p>
        <div className="select">
          <select id="owner">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="completeform">
        <form onSubmit={handleSubmit}>
          <div className="form">
          <span className="span">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
         </div>
         <div className="form"> 
          <span className="span">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          </div>

          <div className="form">
          <span className="span">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
          <div className="signuplogin">
            <button type="submit">SignUp</button>
            <p>/</p>
            <button onClick={() => navigate("/login")}>login</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
