import {
  ADD_ALBUMS,
  UPDATE_ALBUM,
  CLEAR_MESSAGE,
  DELETE_ALBUM,
  ADD_NEW_ALBUM,
} from "../actions";

//contains two variables - an array album and message variable for notification
const initialState = {
  albums: [],
  message: null,
};

export default function albumCollection(state = initialState, action) {
  switch (action.type) {
    case ADD_ALBUMS:
      // if albums have already been loaded do not update state,
      if (state.albums.length !== 0) {
        return state;
      }
      // if it is not loaded, add albums
      return {
        ...state,
        albums: action.albums,
      };
    case UPDATE_ALBUM:
      const updatedAlbum = state.albums.map((album) => {
        if (album.id === action.album.id) {
          return action.album;
        }
        return album;
      });
      return {
        albums: updatedAlbum,
        message: "UPDATED SUCCESSFULLY",
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case DELETE_ALBUM:
      console.log(action.id);
      const newAlbum = state.albums.filter((album) => album.id !== action.id);
      return {
        albums: newAlbum,
        message: "DELETED SUCCESSFULLY",
      };
    case ADD_NEW_ALBUM:
      return {
        ...state,
        albums: [action.album, ...state.albums],
        message: "ADDED NEW ALBUM",
      };
    default:
      return state;
  }
}
