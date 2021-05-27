import React from "react";
import facebookLogo from '../images/facebook.png';
import twitterLogo from '../images/twitter.png';
import linkedinLogo from '../images/linkedin.png';
import instagramLogo from '../images/instagram.png';


export default function Login() {
  return (
    <>
      <div className='form sign-in'>
          <h2>Sign in</h2>
          <label>
              <span>Email Address</span>
              <input type='email' name='email'/>
          </label>
          <label>
              <span>Password</span>
              <input type='password' name='password'/>
          </label>
          <button className="submit" type="button">Sign In</button>
          <p className="forgot-pass">Forgot Password ?</p>

          <div className="social-media">
              <ul>
                  <li><img src={facebookLogo}/></li>
                  <li><img src={twitterLogo}/></li>
                  <li><img src={linkedinLogo}/></li>
                  <li><img src={instagramLogo}/></li>
              </ul>
          </div>
      </div>
    </>
  );
}
