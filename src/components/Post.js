import { ThumbUpOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./Post.css";
import InputOption from "./InputOption.js";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <Avatar>{name}</Avatar>
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOption Icon={ThumbUpOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
