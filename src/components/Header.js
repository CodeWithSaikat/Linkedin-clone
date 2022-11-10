import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption.js";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Message } from "@mui/icons-material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice.js";
import { auth } from "../firebase.js";

const Header = () => {
  const dispatch = useDispatch();
  const LoginToApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/45px-LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleAltIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={Message} title="Messaging" />{" "}
        <HeaderOption
          Icon={NotificationsNoneOutlinedIcon}
          title="Notification"
        />{" "}
        <HeaderOption avatar={Avatar} title="Me" onClick={LoginToApp} />
        {/*  */}
        <HeaderOption Icon={AppsIcon} title="Work" />
        <HeaderOption
          title="Try Premium for
        free"
        />
      </div>
    </div>
  );
};

export default Header;
