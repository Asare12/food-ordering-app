
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { login } from "../actions/auth";

import facebookLogo from '../images/facebook.png';
import twitterLogo from '../images/twitter.png';
import linkedinLogo from '../images/linkedin.png';
import instagramLogo from '../images/instagram.png';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <div className='form sign-in'>
       <Form onSubmit={handleLogin} ref={form}>
          <h2>Sign in</h2>
          <label>
              <span>Email Address</span>
              <Input
              type="email"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </label>
          <label>
              <span>Password</span>
              <Input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}/>
          </label>
          <div className="form-group">
            <button className="submit" disabled={loading}>
              <span>Sign In </span>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </div>
          <p className="forgot-pass">Forgot Password?</p>

          <div className="social-media">
              <ul>
                  <li><img src={facebookLogo}/></li>
                  <li><img src={twitterLogo}/></li>
                  <li><img src={linkedinLogo}/></li>
                  <li><img src={instagramLogo}/></li>
              </ul>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </>
  );
}

export default Login;
