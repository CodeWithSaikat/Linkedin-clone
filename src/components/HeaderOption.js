import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import "./HeaderOption.css";

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="HeaderOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__Icon" />}
      {avatar && (
        <Avatar className="headerOption__Icon">{user?.email[0]}</Avatar>
      )}
      <h4 className="headerOption__title">{title}</h4>
    </div>
  );
};

export default HeaderOption;
