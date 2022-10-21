import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlbum, clearMessage } from "../actions";

function AddAlbum() {
  // useState hook is used to store local state of title and userID
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  // useDispatch hook is used to dispatch function addAlbum
  const dispatch = useDispatch();
  const addNewAlbum = (title, userId) => {
    console.log("parameters", title, userId);
    dispatch(addAlbum(title, userId));
    setTimeout(() => dispatch(clearMessage()), 3000);
  };

  const handleChange = (type, value) => {
    if (type === "userId") {
      setUserId(value);
    } else if (type === "title") {
      setTitle(value);
    }
  };

  return (
    // contains three inputs for title and userId and last div contains add album button as id is auto generated
    <div className="middle-box">
      <div>
        <label>USER ID:</label>
        <input
          name="userId"
          placeholder={userId}
          onChange={(e) => handleChange("userId", e.target.value)}
        />
      </div>
      <div>
        <label>TITLE:</label>
        <input
          name="title"
          placeholder={title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <button onClick={() => addNewAlbum(title, userId)}>ADD ALBUM</button>
    </div>
  );
}

export default AddAlbum;
