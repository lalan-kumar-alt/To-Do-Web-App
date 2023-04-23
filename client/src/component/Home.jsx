import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Home.css";
import axios from "axios";
import Todo from "./Todo";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import green from '@material-ui/core/colors/green';

function Home() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [alltodo, setAlltodo] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userID = location.state.userID;
  console.log(userID);

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await axios.post("http://localhost:5002/yourtodolist", {
      userTitle: title,
      userDescription: description,
      userID: userID,
    });
    setTitle("");
    setDescription("");
    console.log(response.data);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:5002/all/`, {
        params: {
          userID: userID,
        },
      });
      setAlltodo(response.data);
      console.log(alltodo);
    }

    // axios
    // .get(`${BASE_URL}/${userRouter}/getUser`, {
    //   params: {
    //     email: userEmail,
    //     password: userPassword,
    //   },
    // }

    fetchData();
  }, [alltodo]);
  return (
    <div>
      <div className="body">
        <div className="profile">
          <div>
          <AccountCircleIcon
            className="accountprofile"
          
          />
          <div style={{fontSize:"12px",color:"peachpuff",cursor:"pointer",}}    onClick={() => navigate("/login")}> Logout</div>
          </div>
          <p>{userID}</p>
          <h1 className="heading">PriorityPlus</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="addTask">
            <div className="addTasktd">
              <lable>
                Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <input
                  type="text"
                  maxLength="20"
                  placeholder="Title"
                  value={title}
                  className="input"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>{" "}
              </lable>
              <lable>
                Description:{" "}
                <input
                  type="text"
                  placeholder="Add New Task"
                  value={description}
                  className="input"
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </lable>
            </div>
            <button type="submit">
              <lable>
                <AddCircleIcon
                  className="Addcircle"
                  style={{
                    fontSize: "60px",
                  }}
                />
              </lable>
            </button>
          </div>
        </form>
        {alltodo.map((todo, index) => {
          return <Todo todo={todo} key={index} checkuser={userID} />;
        })}
      </div>
    </div>
  );
}

export default Home;
