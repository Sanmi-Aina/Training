import React, { useEffect, useState } from "react";

import "./Header.css";
import HeaderOption from "./HeaderOption";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { BusinessCenter, Chat } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logoutOfApp = (e) => {
    dispatch(logout());
    auth.signOut();
  };

  useEffect(() => {
    let currentUser = auth.currentUser;
    console.log(currentUser.displayName, user.user);
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1642249469~hmac=7b1ba851d35c3cb00a1db379e0d3b971"
          alt="LinkedIn Home Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={user.user.photoURL}
          title={user.user.displayName}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
