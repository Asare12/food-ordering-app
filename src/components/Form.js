import React from "react";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import "../componentsCss/Form.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLogginActive, setLogginActive] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const toggleClass = () => setLogginActive(!isLogginActive);
  const current = isLogginActive ? "Sign In" : "Sign Up";
  return (
    <Container>
      <div className={isLogginActive ? 'cont s-signup': 'cont'}>
        {!isLogginActive && <Login />}
        <div class="sub-cont">
        <SubCont current={current} onClick={toggleClass}/>
        {isLogginActive && !isSubmitted ? <SignUp submitForm={submitForm} /> : <FormSuccess />}
        </div>
      </div>
    </Container>
  );
};

const SubCont = (props) => {
  return (
    <div className="img">
      <div className="img-text m-up">
        <h2>New here?</h2>
        <p>Sign up and keep track of your recent orders</p>
      </div>
      <div className="img-text m-in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
      <div className="img-btn" onClick={props.onClick}>
        <span className="m-up">{props.current}</span>
        <span className="m-in">{props.current}</span>
      </div>
    </div>
  );
};
export default Form;
