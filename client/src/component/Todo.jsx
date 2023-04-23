import React, {useState} from "react";
import axios from "axios";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Todo({ todo,key,checkuser }) {
  const [newtitle, setNewtitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [dummy,setDummy] = useState(false)
  async function handleUpdate(id) {
    let response = await axios.put("http://localhost:5002/update", {
      id: id,
      newtitle: newtitle,
      newDescription: newDescription,
    });
    setShowInput(!showInput);
  }

  async function handleDelete(id) {
   
    let response = await axios.delete(`http://localhost:5002/delete/${id}`);
    console.log(response)
    setDummy(!dummy);
  }

  return (
    <div className="body">
      
      <div className="tasks">
      {(checkuser=="adminsneha") && <div style={{display:"flex",marginRight:"82%",}}><AccountCircleIcon style={{marginRight:"4px",color:"#808080",}}/><div style={{color:"#808080",textShadow:"2px 2px 4px black"}}>{todo.userID}</div> </div> 
           }

        <div className="taskadded">
          <b>{todo.userTitle}</b>
        </div>

        <div className="taskadded">{todo.userDescription}</div>
        <div style={{ display: showInput ? "block" : "none" }}>
          <input
            type="text"
            className="edit"
            placeholder="New title" className="input"
            onChange={(e) => setNewtitle(e.target.value)}
          />
          <input
            type="text"
            className="edit"
            placeholder="New Description" className="input"
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button
            className="updateButton"
            onClick={() => handleUpdate(todo._id)}
          >
            Update
          </button>
        </div>
        <div className="deleteedit">
          <button onClick={() => setShowInput(!showInput)}>
            <DriveFileRenameOutlineIcon className="edit"/>
          </button>
          <button onClick={() => handleDelete(todo._id)}>
            <DeleteForeverIcon className="delete"/>
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Todo;
