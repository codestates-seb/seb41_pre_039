import styled from 'styled-components';
import UserProfileHeader from './UserProfileHeader';
import './DeleteProfile.css';
import { useState } from 'react';

const SideMenuBar = styled.a`
  display: flex;
  align-items: center;
  width: 70%;
  height: 30px;
  border-radius: 20px;
  background-color: transparent;
  text-align: left;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: hsl(210deg 8% 90%);
    cursor: pointer;
  }

  &.active {
    background-color: #f48225;
    color: #fff;
  }
  &.active:hover {
    background-color: #ba680b;
    cursor: pointer;
  }
`;

const Menu = styled.span`
  margin-left: 10px;
`;

const DeleteButton = styled.button`
  background-color: #d0393e;
  color: #fff;
  cursor: pointer;
  border: 1px soContentLid transparent;
  box-shadow: inset 0 1px 0 0 #d0393e, inset 0 2px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  font-size: 14px;
  padding: 0.8em;
  &:hover {
    background-color: #c22e32;
  }
  &.disable {
    background-color: hsl(0deg 65% 77%);
    box-shadow: inset 0 1px 0 0 hsl(0deg 65% 77%);
  }
  &.disable:hover {
    cursor: default;
  }
`;
export default function DeleteProfile() {
  const [checkBtn, setCheckBtn] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const deleteHandler = () => {
    setCheckBtn(!checkBtn);
    setDisabled(!disabled);
  };
  const onKeyUpHandler = (e) => {
    if (e.keyCode === 13) {
      console.log('hi');
    }
  };
  return (
    <section className="userProfile-container">
      <UserProfileHeader />
      <section className="userProfile-contents">
        <div className="menubar-container">
          <div className="fortitle">
            <h4 className="menu-title">PERSONAL INFOMATION</h4>
          </div>
          <SideMenuBar>
            <Menu>Edit profile</Menu>
          </SideMenuBar>
          <SideMenuBar className="active">
            <Menu>Delete profile</Menu>
          </SideMenuBar>
        </div>
        <div className="delete-wrapper">
          <div className="deleteTitle-container">
            <h2>Delete Profile</h2>
          </div>
          <div className="delete-container">
            <p className="delete-p">
              Before confirming that you would like your profile deleted,
              we&apos;d like to take a moment to explain the implications of
              deletion:
            </p>
            <ul className="delete-li-container">
              <li className="delete-li">
                Deletion is irreversible, and you will have no way to regain any
                of your original content, should this deletion be carried out
                and you change your mind later on.
              </li>
              <li className="delete-li">
                Your questions and answers will remain on the site, but will be
                disassociated and anonymized (the author will be listed as
                &quot;user20812387&quot;) and will not indicate your authorship
                even if you later return to the site.
              </li>
            </ul>
            <p className="delete-p">
              Confirming deletion will only delete your profile on Stack
              Overflow - it will not affect any of your other profiles on the
              Stack Exchange network. If you want to delete multiple profiles,
              you&apos;ll need to visit each site separately and request
              deletion of those individual profiles.
            </p>
            <form>
              <fieldset className="checkbox-container">
                <label className="checkbox-label" htmlFor="d-check">
                  <input
                    id="d-check"
                    type="checkbox"
                    onClick={deleteHandler}
                    onKeyUp={(e) => onKeyUpHandler(e)}
                    role="button"
                    tabIndex="0"
                  />
                  I have read the information stated above and understand the
                  implications of having my profile deleted. I wish to proceed
                  with the deletion of my profile.
                </label>
              </fieldset>
              <DeleteButton
                className={disabled ? 'disable' : ''}
                disabled={disabled}
              >
                Delete profile
              </DeleteButton>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
