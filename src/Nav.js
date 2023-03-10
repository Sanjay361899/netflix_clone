import React, { useEffect, useState } from "react";
import logo from "./images/netflix-logo-0.png";
import avatar from "./images/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate=useNavigate();
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll" ,transitionNavBar);
    // console.log("show", show);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [show]);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img className="nav__logo" onClick={()=>navigate('/')} src={logo} alt="" />
        <img className="nav__avatar" onClick={()=>navigate('/profile')} src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Nav;
