import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import UpdateAlbum from "./UpdateAlbum";
import AddAlbum from "./AddAlbum";
import Page404 from "./Page404";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/update" element={<UpdateAlbum />} />
            <Route exact path="/add-album" element={<AddAlbum />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
