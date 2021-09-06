import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";
import useForm from "./useForm";
import validate from "./validateInfo";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};


const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

// const SignUp({submitForm}) {
  const SignUp = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  return (
    <>
      <div class="form sign-up1">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-inputs">
            <label>
              <span>Name</span>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label>
              <span>Email Address</span>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label>
              <span>Password</span>
              <input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label>
              <span>Confirm Password</span>
              <input
                id="password2"
                type="password"
                name="password2"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </label>
          </div>
          <button type="submit" class="submit">
            Sign Up Now
          </button>
        </form>
      </div>
    </>
  );
}
export default SignUp;