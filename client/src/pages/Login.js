import styled from 'styled-components';
import './Login.css';
import logo from '../assets/icon.svg';
import { useState } from 'react';

const NextButton = styled.button`
  width: 100%;
  background-color: hsl(206deg 100% 52%);
  color: #fff;
  cursor: pointer;
  border: 1px soContentLid transparent;
  box-shadow: inset 0 1px 0 0 hsl(206deg 100% 52%),
    inset 0 2px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  font-size: 14px;
  padding: 0.8em;
  &:hover {
    background-color: hsl(206deg 100% 40%);
  }
`;

const InputBox = styled.div`
  width: 80%;
`;

const InputInner = styled.input`
  width: 100%;
  height: 32px;
  margin-top: 5px;
  padding-left: 5px;
  border: 1px solid rgb(193, 193, 193);
  border-radius: 3px;
  &:focus {
    outline-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 6px rgb(128, 191, 215);
    border-radius: 3px;
  }
`;

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

export default function Login() {
  const [idValue, idSetValue] = useState('');
  const [pwValue, pwSetValue] = useState('');
  return (
    /* connect */
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-logo-box">
          <a href="%PUBLIC_URL%">
            <img className="login-logo" src={logo} alt="logo"></img>
          </a>
        </div>
        <form className="login-form">
          <InputBox>
            <label htmlFor="email">Email</label>
            <div>
              <InputInner
                className="login-input email"
                type="text"
                value={idValue}
                onChange={(e) => idSetValue(e.target.value)}
              ></InputInner>
            </div>
          </InputBox>
          <InputBox>
            <div className="pw-wrapper">
              <label htmlFor="password">Password</label>
              <a href="%PUBLIC_URL%" className="find-pw">
                Forgot password?
              </a>
            </div>
            <div>
              <InputInner
                className="login-input pw"
                type="password"
                value={pwValue}
                onChange={(e) => pwSetValue(e.target.value)}
              ></InputInner>
            </div>
          </InputBox>
          <div className="login-btn">
            <NextButton>Log in</NextButton>
          </div>
        </form>
        <div className="login-footer-container">
          <FooterText>
            Don’t have an account?&nbsp; <a href="%PUBLIC_URL%">Sign up</a>
          </FooterText>
          <FooterText>
            Are you an employer?&nbsp;
            <a href="%PUBLIC_URL%">Sign up on Talent</a>
          </FooterText>
        </div>
      </div>
    </div>
  );
}
