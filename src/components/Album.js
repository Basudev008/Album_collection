import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearMessage, deleteAlbum } from "../actions";

class Album extends Component {
  //this function is called upon clicking delete button and dispatches deleteAlbum function and
  // after three seconds dispatches clearMessage function to remove notification div from navbar
  handleDelete = () => {
    this.props.dispatch(deleteAlbum(this.props.album.id));
    setTimeout(() => this.props.dispatch(clearMessage()), 3000);
  };
  render() {
    const toPathWithProps = {
      album: this.props.album,
    };
    return (
      // contains three divs containing - id, userId and title; last div contains update and delete button
      <div className="album-item">
        <div>{this.props.album.id}</div>
        <div>{this.props.album.userId}</div>
        <div><span className="album-title">{this.props.album.title}</span></div>
        <div className="ud-operation">
          {/* Link tag is used with update button to navigate to Update Album component */}
          <Link to="/update" state={toPathWithProps}>
            <button>UPDATE</button>
          </Link>
          <button onClick={this.handleDelete}>DELETE</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state,
  };
}
export default connect(mapStateToProps)(Album);
