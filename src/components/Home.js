import React, { Component } from "react";
import { connect } from "react-redux";

import Album from "./Album";
import { addAlbums } from "../actions";

class Home extends Component {
  constructor(props) {
    super();
    console.log(props);
    props.dispatch(addAlbums());
  }

  render() {
    const { albums } = this.props.state;
    return (
      <div className="Home">
        {/* contains album header and list of all albums using map */}
        <div className="album-item header">
          <div>ID</div>
          <div>USER ID</div>
          <div>TITLE</div>
          <div>SETTINGS</div>
        </div>
        {albums.map((album) => (
          <Album album={album} key={`album-${album.id}`} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
// used connect function to connect to the props
export default connect(mapStateToProps)(Home);
