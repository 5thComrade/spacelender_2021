import React, { useState } from "react";
import classes from "./Login.module.css";
import logo from "../../assets/contact_logo.png";
import isEmail from "validator/lib/isEmail";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/reducers/authentication";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authError = useSelector((state) => state.auth.authError);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail(email) && password.length >= 8) {
      console.log(email, password);
      setEmail("");
      setPassword("");
    } else {
      dispatch(authActions.updateAuthError());
      dispatch(authActions.updateErrorMessage("Authentication failed!"));
      setTimeout(() => {
        dispatch(authActions.updateAuthError());
        dispatch(authActions.updateErrorMessage(""));
      }, 3000);
    }
  };

  return (
    <div className={classes.Login}>
      <div className={classes.Logo}>
        <img src={logo} alt="spacelender logo" />
      </div>
      <div className={classes.Credentials}>
        <h2>Sign In</h2>
        <form className={classes.Loginform}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit} disabled={authError}>
            Login
          </button>
          {authError && <p className={classes.Error}>{errorMessage}</p>}
        </form>
        <p className={classes.Signup}>
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
