import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import avatar from "../images/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg";
import { useDispatch, useSelector } from "react-redux";
import {  selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button className="profileScreen__signOut" onClick={()=>auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
