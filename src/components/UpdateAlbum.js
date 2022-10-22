import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateAlbum, clearMessage } from "../actions";

function UpdateAlbum() {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location.state);
  const { album } = location.state;
  var { id, userId, title } = album;
  console.log(id, userId, title);
  const handleUpdate = () => {
    dispatch(updateAlbum(id, title, userId));
    setTimeout(() => dispatch(clearMessage()), 3000);
  };

  // handleChange method is called onChange event in input and updates the value of userId, id and title
  const handleChange = (type, value) => {
    if (type === "userId") {
      userId = value;
    } else if (type === "title") {
      title = value;
    }
  };

  return (
    // contains three inputs for id, userId, title and last div for update album button
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
      <button onClick={() => handleUpdate(id, title, userId)}>
        UPDATE ALBUM
      </button>
    </div>
  );
}

export default UpdateAlbum;
