import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './UserProfileSetting.css';
import UserProfileHeader from '../components/UserProfileHeader';
import { Link, useNavigate } from 'react-router-dom';
import { ContentEditor } from '../components/Editor';
import axios from 'axios';

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
  border: 1px solid rgb(193, 193, 193);
  border-radius: 3px;
  padding-left: 10px;
  outline: none;
  &:focus {
    border-color: rgb(0 116 204);
    box-shadow: 0 0 0 4px rgb(0 116 204 / 15%);
  }
  &::placeholder {
    color: #ccc;
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
  const [nameValue, setNameValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [inputAboutMe, setInputAboutMe] = useState('');
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('/members/1')
      .then((response) => {
        setUsers(response.data);
        setNameValue(response.data.name);
        setLocationValue(response.data.region);
        setTitleValue(response.data.myTitle);
        setInputAboutMe(response.data.aboutMe);
      })
      .catch((err) => console.error(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .patch('/members/1', {
        name: nameValue,
        myTitle: titleValue,
        aboutMe: inputAboutMe,
        region: locationValue,
      })
      .then(() => {
        console.log('Submit Complete!');
        navigate('/user');
      });
  };

  return (
    <section className="userProfile-container">
      <UserProfileHeader users={users} />
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
              <SaveButton onClick={submitHandler}>Save profile</SaveButton>
              <Cancel>Cancel</Cancel>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfileSetting;
