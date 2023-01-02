import styled from 'styled-components';
import './UserProfile.css';
import UserProfileHeader from '../components/UserProfileHeader';
import { Link } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import timeParse from '../components/time';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Stat = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-size: 14px;
  color: #525960;
  font-weight: normal;
  margin: 10px 0;
  span {
    font-size: 18px;
  }
`;

const ListWrapper = styled.ul`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d6d9dc;
  margin-bottom: 16px;
  li {
    padding: 12px;
    border-bottom: 1px solid #ccc;
    &:last-of-type {
      border: none;
    }
    display: flex;
    align-items: center;
    .badge {
      color: #39739d;
      border: 1px solid #d6d9dc;
      border-radius: 3px;
      padding: 0px 8px;
      font-size: 12px;
      margin-right: 10px;
      div {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    a {
      display: block;
      flex: 1 0;
      color: #39739d;
      text-decoration: none;
    }
    .date {
      color: #6a737c;
      font-size: 13px;
    }
  }
`;

const UserProfile = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    axios
      .get('/members/1')
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="userProfile-container">
      <UserProfileHeader users={users} />
      <section className="userProfile-contents">
        <div className="userProfile-contents--column-stats">
          <article className="userProfile-contents--stats">
            <h4>Stats</h4>
            <div>
              <Stat>
                <span>1</span>
                reputation
              </Stat>
              <Stat>
                <span>1</span>
                reached
              </Stat>
              <Stat>
                <span>{users.comments && users.comments.length}</span>
                answers
              </Stat>
              <Stat>
                <span>{users.questions && users.questions.length}</span>
                questions
              </Stat>
            </div>
          </article>
        </div>
        <div className="userProfile-contents--column-content">
          <article
            className="userProfile-contents--about"
            data-color-mode="light"
          >
            <h4>About</h4>
            <MarkdownPreview source={users && users.aboutMe} />
          </article>
          <article className="userProfile-contents--answers">
            <h4>Answers</h4>
            <List data={users && users.comments} type="answer" />
          </article>
          <article className="userProfile-contents--questions">
            <h4>Questions</h4>
            <List data={users && users.questions} type="question" />
          </article>
        </div>
      </section>
    </section>
  );
};

const List = ({ data, type }) => {
  return (
    <ListWrapper>
      {data &&
        data.map((el, idx) => {
          return (
            <li key={idx}>
              <span className="badge">
                <div>{el.totalVote}</div>
              </span>
              <Link
                to={`/question/${
                  type === 'question' ? el.questionId : el.commentId
                }`}
              >
                {type === 'question'
                  ? el.title.length >= 40
                    ? `${el.title.slice(0, 39)}...`
                    : el.title
                  : `${el.content.slice(0, 39)}...`}
              </Link>
              <span className="date">{timeParse(el.createdAt, 'time')}</span>
            </li>
          );
        })}
    </ListWrapper>
  );
};

export default UserProfile;
