import styled from 'styled-components';
import './Login.css';
import logo from '../assets/icon.svg';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action';

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

const InputInnerAfter = styled(InputInner)`
  border: 1px solid hsl(358deg 68% 59%);
  &:focus {
    outline-color: hsl(357deg 68% 59%);
    box-shadow: 0px 0px 6px hsl(358deg 68% 59%);
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
  const [failIdLogin, setfailIdLogin] = useState(false);
  const [failpwLogin, setfailpwLogin] = useState(false);
  const emailInput = useRef();
  const pwInput = useRef();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state);

  const loginHandler = (e) => {
    e.preventDefault();
    if (idValue === '')
      setfailIdLogin(true), setfailpwLogin(false), emailInput.current.focus();
    if (pwValue === '')
      setfailpwLogin(true), setfailIdLogin(false), pwInput.current.focus();
    if (idValue === '' && pwValue === '')
      setfailIdLogin(true), setfailpwLogin(true), emailInput.current.focus();

    axios
      .post('/auth/login', { email: idValue, password: pwValue })
      .then((res) => {
        console.log(res);
        localStorage.setItem('authorization', res.headers.authorization);
        localStorage.setItem('refresh', res.headers.refresh);
        localStorage.setItem('expires', res.headers.expires);
        dispatch(login(1)); // ! memberId 들어오는 response 변경 시 수정 필요
        console.log(isLogin);
      })
      .catch((err) => console.error(err));
  };

  return (
    /* connect */
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-logo-box">
          <a href={process.env.PUBLIC_URL}>
            <img className="login-logo" src={logo} alt="logo"></img>
          </a>
        </div>
        <form className="login-form">
          <InputBox>
            <label htmlFor="email">Email</label>
            <div className="input-div">
              {failIdLogin ? (
                <InputInnerAfter
                  className="login-input email"
                  type="text"
                  value={idValue}
                  ref={emailInput}
                  onChange={(e) => idSetValue(e.target.value)}
                ></InputInnerAfter>
              ) : (
                <InputInner
                  className="login-input email"
                  type="text"
                  value={idValue}
                  onChange={(e) => idSetValue(e.target.value)}
                  ref={emailInput}
                ></InputInner>
              )}
              <svg
                className={failIdLogin ? 's-input-icon hidden' : 's-input-icon'}
                width="18px"
                height="18px"
                fill="hsl(358deg 68% 59%)"
              >
                <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z" />
              </svg>
            </div>
            <p className={failIdLogin ? 'email-vaild hidden' : 'email-vaild'}>
              Email cannot be empty
            </p>
          </InputBox>
          <InputBox>
            <div className="pw-wrapper">
              <label htmlFor="password">Password</label>
              <a href={process.env.PUBLIC_URL} className="find-pw">
                Forgot password?
              </a>
            </div>
            <div className="input-div">
              {failpwLogin ? (
                <InputInnerAfter
                  className="login-input pw"
                  type="password"
                  value={pwValue}
                  ref={pwInput}
                  onChange={(e) => pwSetValue(e.target.value)}
                ></InputInnerAfter>
              ) : (
                <InputInner
                  className="login-input pw"
                  type="password"
                  value={pwValue}
                  onChange={(e) => pwSetValue(e.target.value)}
                  ref={pwInput}
                ></InputInner>
              )}
              <svg
                className={failpwLogin ? 's-input-icon hidden' : 's-input-icon'}
                width="18px"
                height="18px"
                fill="hsl(358deg 68% 59%)"
              >
                <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z" />
              </svg>
            </div>
            <p className={failpwLogin ? 'email-vaild hidden' : 'email-vaild'}>
              Password cannot be empty.
            </p>
          </InputBox>
          <div className="login-btn">
            <NextButton onClick={loginHandler}>Log in</NextButton>
          </div>
        </form>
        <div className="login-footer-container">
          <FooterText>
            Don’t have an account?&nbsp;{' '}
            <a href={process.env.PUBLIC_URL}>Sign up</a>
          </FooterText>
          <FooterText>
            Are you an employer?&nbsp;
            <a href={process.env.PUBLIC_URL}>Sign up on Talent</a>
          </FooterText>
        </div>
      </div>
    </div>
  );
}
