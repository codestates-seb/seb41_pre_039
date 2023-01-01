import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Question.css';
import timeParse from './time';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
export default function Question({ setIsKey, questionId }) {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    axios
      .get(`/questions/${questionId}`)
      .then((res) => setQuestion(res.data))
      .catch((err) => console.error(err));
  }, []);
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
            <button className="content-up"></button>
            <span className="content-num">{question.totalVote}</span>
            <button className="content-down"></button>
          </div>
          <article className="content-question" data-color-mode="light">
            <MarkdownPreview source={question.content} className="question-p" />
            <ul className="content-tag">
              {question.tags &&
                question.tags.map((el, i) => {
                  return <TagList key={i}>{el}</TagList>;
                })}
            </ul>
            <div className="content-writerInfo">
              <Link
                to={`/edit/question/${questionId}`}
                className="content-edit"
                onClick={() => setIsKey('Question')}
              >
                Edit
              </Link>
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
                    {question.username}
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
