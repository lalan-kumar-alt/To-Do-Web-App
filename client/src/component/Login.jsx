import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import front from "../assests/front.jpg";
import "./Signup.css";

function Login() {
  const navigate = useNavigate();
  const [lname, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [lpassword, setPassword] = useState("");
  const [selects, setSelects] = useState("user");
  async function handleLogin(e) {
    e.preventDefault();
    let result = await axios.post("http://localhost:5002/login", {
      userLname: lname,
      userLpassword: lpassword,
    });

    // delete result['userLpassword'];
    let gotuser = result.data;
    
    if (gotuser !== "") {
        // console.log(result)
        // save information in localstorage before moving to home page

        localStorage.setItem(
            "userInfo",
            JSON.stringify({
              userName: gotuser.userName,
              userID: gotuser._id,
            })
          );
         console.log(gotuser);
         console.log(selects)
      if(selects == "admin" && gotuser.userName=="sneha" && gotuser.userPassword == "sneha")
      navigate("/home", {
        state: { userID: "adminsneha" },
      });
      else
      navigate("/home", {
        state: { userID: gotuser.userName },
      });
       }
    
    else {
      alert("Your username or Password is wrong");
    }
  }

  return (
    <>
      <div  style={{
        backgroundImage: `url(${front})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}>
        <h1 style={{marginRight: "80%"}} className="title">PriorityPlus</h1>
        <div className="card">
        <p style={{fontSize:"25px",color:"#FFE5B4",}}>Login</p>
        <div className="select">
          <select id="owner" value={selects} onChange={(e)=>setSelects(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="completeform">
      <form onSubmit={handleLogin}>
        <div className="form">
        <span className="span">Name</span>
        <input
          type="text"
          value={lname}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        </div>
       
        <div className="form">
        <span className="span">Password</span>
        <input
          type="text"
          value={lpassword}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        </div>
       
        <div className="signuplogin">
        <button onClick={()=> navigate("/")}>Signup</button>
        <p>/</p>
        <button type="submit">Login</button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </>
  );
}

export default Login;
