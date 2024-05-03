import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* contains three div - app title, add album button and message div which is based on conditional rendering */}
        <div className="app-title"><Link to="/">Album-Collection</Link></div>
        <div>
          <Link to="/add-album">
            <button>ADD ALBUM</button>
          </Link>
        </div>
        {this.props.state.message && (
          <div className="notification">{this.props.state.message}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(Navbar);
