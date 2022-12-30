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
  border: 1px solid;
  border-color: ${(props) => (props.error ? '#de4f54' : 'rgb(193, 193, 193)')};
  border-radius: 3px;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 0px 4px
      ${(props) =>
        props.error ? 'rgb(194 46 50 / 15%)' : 'rgb(0 116 204 / 15%)'};
  }
  &::placeholder {
    color: #aaa;
  }
`;

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, errors);
  };

  const validation = (v = '') => {
    if (v.match(/^[A-Za-z]+$/i))
      return (
        <p>
          Please add one of the following things to make your password stronger.
          <li>numbers</li>
        </p>
      );
    else if (v.match(/^[0-9]+$/i))
      return (
        <p>
          Please add one of the following things to make your password stronger.
          <li>letters</li>
        </p>
      );
    else return;
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
              <label htmlFor="name">Display name</label>
              <Input
                id="name"
                className="displayname"
                placeholder="Display name"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <Input
                  id="email"
                  className="email"
                  error={errors.email}
                  {...register('email', {
                    required: true,
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: 'This is not a valid email address.',
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email ? (
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconAlertCircle"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                  </svg>
                ) : undefined}
              </div>
              <div className="errorMessage">
                {errors.email && errors.email.type === 'required' && (
                  <p>Email cannot be empty.</p>
                )}
                {errors.email?.message}
              </div>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <Input
                  id="password"
                  className="password"
                  error={errors.password}
                  {...register('password', {
                    required: true,
                    minLength: { value: 8 },
                    validate: {
                      letter: (v) => validation(v),
                    },
                  })}
                  type="password"
                  placeholder="Password"
                />
                {errors.password ? (
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconAlertCircle"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                  </svg>
                ) : undefined}
              </div>
              <div className="errorMessage">
                {errors.password && errors.password.type === 'required' && (
                  <p>Password cannot be empty.</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <p>Must contain at least 8 characters.</p>
                )}
                {errors.password?.message}
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
