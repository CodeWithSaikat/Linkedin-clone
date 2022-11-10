import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__rectntItem">
      <span className="sidebar__recent">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.pantone.com/media/wysiwyg/pantone-color-fundamentals-characteristics-of-color-mobile.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar  ">{user.email[0]}</Avatar>
        <h2 className="sidebar__title">{user.displayName}</h2>
        <h4 className="sidebar__info">Computer Operator at home</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("rectjs")}
        {recentItem("Nodejs")}
        {recentItem("Nextjs")}
        {recentItem("Firebase")}
      </div>
    </div>
  );
};

export default Sidebar;
