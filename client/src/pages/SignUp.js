import { useState } from 'react';
import styled from 'styled-components';
import './SignUp.css';
import Icon1 from '../assets/icon1.svg';
import Icon2 from '../assets/icon2.svg';
import Icon3 from '../assets/icon3.svg';
import Icon4 from '../assets/icon4.svg';
import { useForm } from 'react-hook-form';

const Input = styled.input`
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

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log(register('displayname'));

  const onSubmit = (data) => {
    console.log(data, errors);
  };
  
  return (
    <>
      <div className="signupWrapper">
        <div className="signupInfo">
          <h1>Join the Stack Overflow community</h1>
          <li>
            <img className="icon" src={Icon1} alt="Icon1"></img>
            Get unstuck — ask a question
          </li>
          <li>
            <img className="icon" src={Icon2} alt="Icon2"></img>
            Unlock new privileges like voting and commenting
          </li>
          <li>
            <img className="icon" src={Icon3} alt="Icon3"></img>Save your
            favorite tags, filters, and jobs
          </li>
          <li>
            <img className="icon" src={Icon4} alt="Icon4"></img>Earn reputation
            and badges
          </li>
          <div>
            <div className="signupInfoFooter">
              <div>
                Collaborate and share knowledge with a private group for FREE.
              </div>
              <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
                Get Stack Overflow for Teams free for up to 50 users.
              </a>
            </div>
          </div>
        </div>
        <div className="signupContatiner">
          <form onSubmit={handleSubmit(onSubmit)} className="signupForm">
            <div className="displayName">
              Display name
              <Input className="displayname" placeholder="Display name"></Input>
            </div>
            <div className="email">
              Email
              <Input
                className="email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: 'This is not a valid email address.',
                  },
                })}
                placeholder="Email"
              ></Input>
              <div className="errorMessage">
                {errors.email && errors.email.type === 'required' && (
                  <p>Email cannot be empty.</p>
                )}
                {errors.email?.message}
              </div>
            </div>
            <div className="password">
              Password
              <Input
                className="password"
                {...register('password', {
                  required: true,
                  minLength: { value: 8 },
                })}
                type="password"
                placeholder="Password"
              ></Input>
              <div className="errorMessage">
                {errors.password && errors.password.type === 'required' && (
                  <p>Password cannot be empty.</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <p>Must contain at least 8 characters.</p>
                )}
              </div>
            </div>
            <div className="signupFooter">
              <div className="passwordGiide">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </div>
              <button type="submit">Sign up</button>
              <div className="signupAgree">
                By clicking “Sign up”, you agree to our{' '}
                <a href="https://stackoverflow.com/legal/privacy-policy">
                  terms of service, privacy policy&nbsp;
                </a>
                and&nbsp;
                <a href="https://stackoverflow.com/legal/cookie-policy">
                  cookie policy
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
