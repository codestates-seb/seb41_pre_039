import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Question.css';
import { question } from './initialState';
import timeParse from './time';
import { user } from './initialState';

const TagList = styled.li`
  padding: 4.8px 6px;
  height: 23px;
  margin-right: 5px;
  background-color: #d9eaf7;
  border-radius: 3px;
  font-size: 12px;
  color: hsl(205deg 47% 42%);
  cursor: pointer;
  &:hover {
    background-color: hsl(205deg 51% 88%);
    color: hsl(205deg 46% 32%);
    cursor: pointer;
  }
`;
export default function Question() {
  console.log(user.name);
  return (
    <>
      <div className="content-header">
        <div className="content-title">
          <span className="title-h">
            <h1>{question.title}</h1>
          </span>
          <div className="question-ask">
            <Link className="ask-button" to="/addquestion">
              Ask Question
            </Link>
          </div>
        </div>
        <div className="question-info">
          <span className="info">
            Asked{' '}
            <time className="time-info">
              {timeParse(question.createdAt, 'day')}
            </time>
          </span>
          <div className="info">
            Modified{' '}
            <a href="http://localhost:3000/question" className="time-info">
              {timeParse(question.modifiedAt, 'day')}
            </a>
          </div>
          <span className="info">
            Viewed <span className="time-info">{question.viewCount} times</span>
          </span>
        </div>
      </div>
      <div className="content-layout">
        <div className="question-container">
          <div className="content-recommend">
            <span className="content-up"></span>
            <span className="content-num">0</span>
            <span className="content-down"></span>
          </div>
          <article className="content-question">
            <p className="question-p">
              Is there a way to change the color of the following slide of the
              CRAN package shinyWidgets? Thanks in advance. I need to do it also
              in within the update function.
            </p>
            <div className="question-codeBox">
              <div className="question-code">{question.content}</div>
            </div>
            <br />
            <ul className="content-tag">
              {question.tags.map((el, i) => {
                return <TagList key={i}>{el}</TagList>;
              })}
            </ul>
            <div className="content-writerInfo">
              <a href="%PUBLIC_URL%" className="content-edit">
                Edit
              </a>
              <div className="writer-box">
                <p className="asked-time">
                  {timeParse(question.createdAt, 'time')}
                </p>
                <div className="userInfo">
                  <a href="%PUBLIC_URL%">
                    <img
                      src="http://placeimg.com/24/24/any"
                      alt="writer-avatar"
                      className="writer-avatar"
                    ></img>
                  </a>
                  <a href="http://localhost:3000/user" className="writer-name">
                    {user.name}
                  </a>
                </div>
              </div>
            </div>
            <a href="%PUBLIC_URL%" className="add-comment">
              Add a comment
            </a>
          </article>
        </div>
      </div>
    </>
  );
}
