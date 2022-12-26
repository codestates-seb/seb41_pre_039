import styled from 'styled-components';
import './SignUp.css';

const Input = styled.div`
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
  return (
    <>
      <div className="signupWrapper">
        <div className="signupInfo">
          <h1>Join the Stack Overflow community</h1>
          <div>Get unstuck — ask a question</div>
          <div>Unlock new privileges like voting and commenting</div>
          <div>Save your favorite tags, filters, and jobs</div>
          <div>Earn reputation and badges</div>
          <div>
            <div>
              Collaborate and share knowledge with a private group for FREE.
            </div>
            <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
              Get Stack Overflow for Teams free for up to 50 users.
            </a>
          </div>
        </div>
        <div className="signupContatiner">
          <form className="signupForm">
            <div className="displayName">
              Display name
              <Input></Input>
            </div>
            <div className="Email">
              Email
              <Input></Input>
            </div>
            <div className="password">
              Password
              <Input></Input>
            </div>
            <div className="signupFooter">
              <div className="passwordGiide">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </div>

              <button>Sign up</button>
              <div className="signupAgree">
                By clicking “Sign up”, you agree to our terms of service,
                privacy policy and cookie policy
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
