import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();

  const inputOnChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const register = (e) => {
    console.log(e);
    if (!formValue.name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(formValue.email, formValue.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: formValue.name,
            photoURL: formValue.profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: formValue.name,
                photoURL: formValue.profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    if (!formValue.email) {
      return alert("Please enter your email address");
    }
    if (!formValue.password) {
      return alert("Please enter your password");
    }
    auth
      .signInWithEmailAndPassword(formValue.email, formValue.password)
      .then((userCred) => {
        dispatch(
          login({
            email: userCred.user.email,
            uid: userCred.user.uid,
            displayName: userCred.user.displayName,
            photoUrl: userCred.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
        alt="LinkedIn Logo"
      />

      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={formValue.name}
          name="name"
          onChange={inputOnChangeHandler}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={formValue.profilePic}
          name="profilePic"
          onChange={inputOnChangeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={formValue.email}
          name="email"
          onChange={inputOnChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={formValue.password}
          name="password"
          onChange={inputOnChangeHandler}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
