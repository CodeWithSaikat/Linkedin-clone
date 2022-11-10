import { Avatar } from "@mui/material";
import "./Feed.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import InputOption from "./InputOption.js";
import { CalendarViewDay } from "@mui/icons-material";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import Post from "./Post.js";
import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  });

  const createPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <form className="icon-button">
            <Avatar></Avatar>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <button type="submit" onClick={createPost}>
              Post
            </button>
          </form>
          <div className="feed__inputIcons">
            <InputOption
              Icon={InsertPhotoOutlinedIcon}
              title="Photo"
              color="#70b5f9"
            />
            <InputOption
              Icon={OndemandVideoOutlinedIcon}
              title="Video"
              color="#7fc15e"
            />
            <InputOption
              Icon={EventOutlinedIcon}
              title="Event"
              color="#e7a33e"
            />
            <InputOption
              Icon={CalendarViewDay}
              title="Write Artical"
              color="#fc9295"
            />
          </div>
        </div>
      </div>
      {/* post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* <Post
        name="Saikat Das"
        description="This is a test msg from SD"
        message="This is a WOW msg"
      /> */}
    </div>
  );
};

export default Feed;
