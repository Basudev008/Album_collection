export const ADD_ALBUMS = "ADD_ALBUMS";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
export const ADD_NEW_ALBUM = "ADD_NEW_ALBUM";

export function addAlbumToState(albums) {
  return {
    type: ADD_ALBUMS,
    albums,
  };
}

// addAlbums method is used to load all albums into Home component and this further dispatches addAlbumToState function
export function addAlbums() {
  return function (dispatch) {
    fetch(" https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((album) => {
        console.log(album);

        dispatch(addAlbumToState(album));
      });
  };
}

export function updateAlbumToState(album) {
  return {
    type: UPDATE_ALBUM,
    album,
  };
}

// updateAlbum method is used to update album based on new values - id, title and userId
//and this further dispatches updateAlbumToState function
export function updateAlbum(id, title, userId) {
  console.log(id, title, userId);
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        title,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(updateAlbumToState(json)));
  };
}

export function deleteAlbumInState(id) {
  return {
    type: DELETE_ALBUM,
    id,
  };
}

// deleteAlbum method is used to delete album based on id and this further dispatches deleteAlbumInState function
export function deleteAlbum(id) {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("JSON", json);
        dispatch(deleteAlbumInState(id));
      });
  };
}

export function addNewAlbumToState(album) {
  return {
    type: ADD_NEW_ALBUM,
    album,
  };
}

// addAlbum method is used to add album this further dispatches addNewAlbumToState function
export function addAlbum(title, userId) {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("JSON", json);
        dispatch(addNewAlbumToState(json));
      });
  };
}

// this function is called to clear message variable in state
export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}
