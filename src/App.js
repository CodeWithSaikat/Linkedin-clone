import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed.js";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Sidebar from "./components/Sidebar.js";
import Widgets from "./components/Widgets.js";
import { login, logout, selectUser } from "./features/userSlice.js";
import { auth } from "./firebase.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed(middle porson) */}
          <Feed />
          {/* <Feed /> */}
          {/* Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
