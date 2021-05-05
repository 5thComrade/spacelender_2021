import React, { useState } from "react";
import classes from "./Signup.module.css";
import logo from "../../assets/contact_logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/reducers/authentication";
import isEmail from "validator/lib/isEmail";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const authError = useSelector((state) => state.auth.authError);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName.length > 20 || user.lastName.length > 20) {
      dispatch(authActions.updateAuthError());
      dispatch(authActions.updateErrorMessage("Please enter a shorter name"));
      setTimeout(() => {
        dispatch(authActions.updateAuthError());
        dispatch(authActions.updateErrorMessage(""));
      }, 3000);
      return;
    }
    if (!isEmail(user.email)) {
      dispatch(authActions.updateAuthError());
      dispatch(
        authActions.updateErrorMessage("Please enter a valid email address")
      );
      setTimeout(() => {
        dispatch(authActions.updateAuthError());
        dispatch(authActions.updateErrorMessage(""));
      }, 3000);
      return;
    }
    if (user.password.length < 8) {
      dispatch(authActions.updateAuthError());
      dispatch(
        authActions.updateErrorMessage(
          "Password should have a minimum of 8 characters"
        )
      );
      setTimeout(() => {
        dispatch(authActions.updateAuthError());
        dispatch(authActions.updateErrorMessage(""));
      }, 3000);
      return;
    }
    if (user.password !== user.confirmPassword) {
      dispatch(authActions.updateAuthError());
      dispatch(authActions.updateErrorMessage("The passwords do not match"));
      setTimeout(() => {
        dispatch(authActions.updateAuthError());
        dispatch(authActions.updateErrorMessage(""));
      }, 3000);
      return;
    }
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      dispatch(authActions.updateAuthError());
      dispatch(
        authActions.updateErrorMessage("Please enter all the mandatory fields")
      );
      setTimeout(() => {
        dispatch(authActions.updateAuthError());
        dispatch(authActions.updateErrorMessage(""));
      }, 3000);
      return;
    }
    console.log(user);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={classes.Signup}>
      <div className={classes.Logo}>
        <img src={logo} alt="spacelender logo" />
      </div>
      <div className={classes.Credentials}>
        <h2>Sign Up</h2>
        <form className={classes.SignupForm}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
          />
          <button type="submit" onClick={handleSubmit} disabled={authError}>
            Signup
          </button>
          {authError && <p className={classes.Error}>{errorMessage}</p>}
        </form>
        <p className={classes.Login}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
