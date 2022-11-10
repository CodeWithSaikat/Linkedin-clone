import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../features/userSlice.js";
import { auth } from "../firebase.js";
import SingIn from "./SingIn.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const Register = (e) => {
    e.preventDefault();
    console.log("Sucessfully registered");
    // Navigate(`/singin`);

    if (!email) {
      return alert("Please enter email");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            email: email,
            password: password,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                displayName: name,
                password: password,
                uid: userAuth.user.uid,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const LoginToApp = (e) => {
    e.preventDefault();
    console.log("Login SUcessfully");
    // Navigate(`/singin`);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login__register">
      <div className="login">
        <div className="login__logo">
          <h2>Linkdein</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/45px-LinkedIn_logo_initials.png"
            alt=""
          />
        </div>
        <div className="login__title">
          Make the most of your professional life
        </div>
        <form action="">
          <div className="for__fullName">
            <label htmlFor="">Enter your full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>{" "}
          <div className="for__PhNumber">
            <label htmlFor="">Email or phone number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>{" "}
          <div className="for__password">
            <label htmlFor="">Password (6 or more characters)</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="agree__join__button"
            onClick={LoginToApp}
          >
            Sing in
          </button>
          {/* <div className="or">
            <div className="or__line"></div>
            <div>or</div>
            <div className="or__line"></div>
          </div> */}
          <div className="login__with__google">
            <img
              src="https://img.favpng.com/20/11/10/google-logo-google-account-g-suite-google-images-google-search-png-favpng-rTnjE5rGaBuktNMbihGdPMTjT.jpg"
              alt=""
            />
            <p>Continue with Google</p>
          </div>
          <div className="singIn">
            {/* <p>
            Already on Linkdein? <Link to={`/singIn`}>Sing in</Link>{" "}
          </p> */}
            <p>
              Not a member?{" "}
              <a href="/register" onClick={Register}>
                Register{" "}
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* <div className="register">
        <div className="login">
          <div className="login__logo">
            <h2>Linkdein</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/45px-LinkedIn_logo_initials.png"
              alt=""
            />
          </div>
          <div className="login__title">Sing In</div>
          <form action="">
            <div className="for__PhNumber">
              <label htmlFor="">Email or phone number</label>
              <input type="text" />
            </div>{" "}
            <div className="for__password">
              <label htmlFor="">Password (6 or more characters)</label>
              <input type="text" />
            </div>
            <button
              type="submit"
              className="agree__join__button"
              onClick={LoginToApp}
            >
              Sing in
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
