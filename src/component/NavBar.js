import React from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar_top">
        <div className="navBar_left">
          <div className="navBar_logo">
            <h1>NavBar</h1>
          </div>
        </div>
        <div className="navBar_right">
          <div className="navBar_icon">
            <IconButton aria-label="delete">
              <MenuIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
