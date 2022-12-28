import { useState } from 'react';
import styled from 'styled-components';
import './UserProfileSetting.css';
import UserProfileHeader from '../components/UserProfileHeader';
import { Link } from 'react-router-dom';
import { ContentEditor } from '../components/Editor';

const SideMenuBar = styled(Link)`
  display: flex;
  align-items: center;
  width: 70%;
  height: 30px;
  border-radius: 20px;
  background-color: transparent;
  text-align: left;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;

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

const EditInput = styled.input`
  width: 65%;
  height: 30px;
  border: 1px solid hsl(207deg 7% 75%);
  border-radius: 5px;
  padding-left: 10px;

  &:focus {
    outline-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 6px rgb(128, 191, 215);
    border-radius: 5px;
  }
`;

const SaveButton = styled.button`
  background-color: hsl(206deg 100% 52%);
  color: #fff;
  cursor: pointer;
  border: 1px soContentLid transparent;
  box-shadow: inset 0 1px 0 0 hsl(206deg 100% 52%),
    inset 0 2px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  font-size: 14px;
  padding: 0.8em;
  margin-right: 10px;
  &:hover {
    background-color: hsl(206deg 100% 40%);
  }
`;

const Cancel = styled.a`
  background-color: white;
  color: hsl(206deg 100% 40%);
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  padding: 0.8em;

  &:hover {
    color: hsl(209deg 99% 38%);
    background-color: hsl(206deg 100% 97%);
  }
`;
const UserProfileSetting = () => {
  const [nameValue, setNameValue] = useState('UserName');
  const [locationValue, setLocationValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [inputAboutMe, setInputAboutMe] = useState('');

  return (
    <section className="userProfile-container">
      <UserProfileHeader />
      <section className="userProfile-contents">
        <div className="menubar-container">
          <div className="fortitle">
            <h4 className="menu-title">PERSONAL INFOMATION</h4>
          </div>
          <SideMenuBar to="/user/setting" className="active">
            <Menu>Edit profile</Menu>
          </SideMenuBar>
          <SideMenuBar to="/user/delete">
            <Menu>Delete profile</Menu>
          </SideMenuBar>
        </div>
        <div className="edit-wrapper">
          <div className="editTitle-container">
            <h2>Edit your profile</h2>
          </div>
          <div className="edit-item">
            <h1 className="info-title">Public information</h1>
            <div className="edit-container">
              <div className="edit-title">Profile image</div>
              <div className="edit-item">
                <img
                  className="userProfile-userinfo--userImage change"
                  src="http://placeimg.com/128/128/any"
                  alt="user"
                />
                <button className="changeImg">change picture</button>
              </div>
              <div className="edit-item">
                <div className="edit-title">Display name</div>
                <EditInput
                  type="text"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                ></EditInput>
              </div>
              <div className="edit-item">
                <div className="edit-title">Location</div>
                <EditInput
                  type="text"
                  value={locationValue}
                  onChange={(e) => setLocationValue(e.target.value)}
                ></EditInput>
              </div>
              <div>
                <div className="edit-title">Title</div>
                <EditInput
                  placeholder="No title has been set"
                  type="text"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                ></EditInput>
              </div>
              <div className="edit-item">
                <div className="edit-title">About me</div>
                <ContentEditor
                  value={inputAboutMe}
                  changeHandler={setInputAboutMe}
                />
              </div>
            </div>
            <div className="save-container">
              <SaveButton>Save profile</SaveButton>
              <Cancel>Cancel</Cancel>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfileSetting;
