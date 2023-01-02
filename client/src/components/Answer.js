import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Answer.css';
import { AnswerEditor } from './Editor';
import MarkdownPreview from '@uiw/react-markdown-preview';
import timeParse from './time';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NextButton = styled.button`
  background-color: hsl(206deg 100% 52%);
  color: #fff;
  cursor: pointer;
  border: 1px soContentLid transparent;
  box-shadow: inset 0 1px 0 0 hsl(206deg 100% 52%),
    inset 0 2px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  font-size: 13px;
  padding: 0.8em;
  margin-top: 16px;
  &:hover {
    background-color: hsl(206deg 100% 40%);
  }
`;

const ContentLi = styled.li`
  list-style-type: disc;
`;

const ContentP = styled.p`
  margin-bottom: 13px;
`;

const ContentUl = styled.ul`
  margin-bottom: 13px;
  margin-left: 30px;
`;

export default function Answers({ questionId }) {
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    axios
      .get(`/comments/questions/${questionId}`)
      .then((res) => setAnswer(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="answer-header">
        <h2>{answer.length} Answer </h2>
        <div className="sorted-box">
          <div className="sorted-info">
            <span className="sorted-text">Sorted by:</span>
          </div>
          <div>
            <select name="sorted" className="answer-sorted">
              <option value="Date created">Date created (default)</option>
              <option value="hightes score">Hightes score</option>
            </select>
          </div>
        </div>
      </div>
      <div className="content-layout">
        {answer &&
          answer.map((answer) => (
            <Answer key={answer.commentId} answer={answer} />
          ))}
      </div>
      <YourAnswer />
    </>
  );
}

function Answer({ answer }) {
  const commentId = answer.commentId;
  return (
    <div className="answer-container">
      <div className="content-recommend">
        <button className="content-up"></button>
        <span className="content-num">{answer.totalVote}</span>
        <button className="content-down"></button>
        <button className="content-chosen-button">
          <svg className="svg-icon" width="36" height="36" viewBox="0 0 36 36">
            <path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path>
          </svg>
        </button>
      </div>
      <article className="content-question" data-color-mode="light">
        <MarkdownPreview source={answer.content} className="answer-p" />
        <div className="content-answerInfo">
          <Link to={`/edit/answer/${commentId}`} className="content-edit">
            Edit
          </Link>
          <div className="answer-box">
            <p className="asked-time">{timeParse(answer.createdAt, 'time')}</p>
            <div className="userInfo">
              <a href="%PUBLIC_URL%">
                <img
                  src="http://placeimg.com/24/24/any"
                  alt="answer-avatar"
                  className="answer-avatar"
                ></img>
              </a>
              <a href="%PUBLIC_URL%" className="answer-name">
                {answer.username}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function YourAnswer() {
  const [help, setHelp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputClickHandler = () => {
    setHelp(true);
  };
  return (
    <>
      <form className="ya-box">
        <div className="ya-title">
          <h2>Your Answer</h2>
        </div>
        <AnswerEditor
          value={inputValue}
          changeHandler={setInputValue}
          clickHandler={inputClickHandler}
        />
        {help ? <YourAnswerModal /> : null}
        <NextButton>Post Your Answer</NextButton>
      </form>
    </>
  );
}

function YourAnswerModal() {
  const [none, setNone] = useState(false);
  return (
    <>
      <aside
        className={none ? 'ya-modal-container hide' : 'ya-modal-container'}
      >
        <div className="ya-modal-content">
          <ContentP>
            Thanks for contributing an answer to Stack Overflow!
          </ContentP>
          <ContentUl>
            <ContentLi>
              Please be sure to <em>answer the question.</em> Provide details
              and share your research!
            </ContentLi>
          </ContentUl>
          <ContentP>
            But <em>avoid</em> …
          </ContentP>
          <ContentUl>
            <ContentLi>
              Asking for help, clarification, or responding to other answers.
            </ContentLi>
            <ContentLi>
              Making statements based on opinion; back them up with references
              or personal experience.
            </ContentLi>
          </ContentUl>
          <p>To learn more, see our tips on writing great answers.</p>
        </div>
        <div className="ya-modal-exit">
          <span
            onClick={() => {
              setNone(!none);
            }}
            role="presentation"
            className="ya-exit"
          >
            ✕
          </span>
        </div>
      </aside>
    </>
  );
}
