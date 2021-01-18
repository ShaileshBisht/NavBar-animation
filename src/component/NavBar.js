import React, { useEffect } from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import gsap from "gsap";

function NavBar() {
  const t1 = gsap.timeline();
  useEffect(() => {
    t1.pause(true);
    t1.to(".navBar_bottom", {
      duration: 0.5,
      opacity: 1,
      width: "100%",
    })
      .from(".navBar_li", {
        duration: 1,
        scale: 2,
        opacity: 0,
        ease: "back.out(1.7)",
        x: "200px",
        stagger: 0.2,
      })
      .from(".navBar_close", {
        duration: 0.5,
        opacity: 0,
        scale: 4,
        x: "-1000px",
        ease: "elastic.out(1, 0.3)",
      });
  }, [t1]);

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
            <IconButton aria-label="delete" onClick={(e) => t1.play()}>
              <MenuIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="navBar_bottom">
        <div className="navBar_bottomClose">
          <IconButton
            aria-label="delete"
            className="navBar_close"
            onClick={(e) => t1.reverse()}
          >
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
