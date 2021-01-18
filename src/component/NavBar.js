import React from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
      <div className="navBar_bottom">
        <div className="navBar_bottomClose">
          <IconButton aria-label="delete" className="navBar_close">
            <CloseIcon fontSize="large" style={{ color: "black" }} />
          </IconButton>
        </div>

        <ul className="navBar_list">
          <li className="navBar_li">
            <a className="navBar_link" href="#home">
              HOME
            </a>
          </li>
          <li className="navBar_li">
            <a className="navBar_link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="navBar_li">
            <a className="navBar_link" href="#skills">
              SKILLS
            </a>
          </li>
          <li className="navBar_li">
            <a className="navBar_link" href="#project">
              PROJECT
            </a>
          </li>
          <li className="navBar_li">
            <a className="navBar_link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
