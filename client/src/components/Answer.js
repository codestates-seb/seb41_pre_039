import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Answer.css';
import { AnswerEditor } from './Editor';
import MarkdownPreview from '@uiw/react-markdown-preview';
import timeParse from './time';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

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

export default function Answers({ answers, questionId, question }) {
  const { memberId } = useSelector((state) => state);

  return (
    <>
      {answers.length ? (
        <div className="answer-header">
          <h2>{answers.length} Answer </h2>
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
      ) : undefined}
      <div className="content-layout">
        {answers &&
          answers.map((answer) => (
            <Answer
              key={answer.commentId}
              answer={answer}
              memberId={memberId}
              question={question}
            />
          ))}
      </div>

      <YourAnswer questionId={questionId} />
    </>
  );
}

function Answer({ answer, memberId, question }) {
  const { commentId, totalVote, content, createdAt } = answer;
  const [vote, setVote] = useState(0);

  useEffect(() => {
    setVote(totalVote);
  }, [answer]);

  const voteHandler = (e) => {
    const { name } = e.target;
    axios.defaults.headers.common['Authorization'] =
      localStorage.getItem('authorization');
    if (name === 'voteUp') {
      axios
        .patch(`/comments/${commentId}`, { totalVote: vote + 1 })
        .then((res) => setVote(res.data.totalVote))
        .catch((err) => console.error(err));
    } else {
      axios
        .patch(`/comments/${commentId}`, { totalVote: vote - 1 })
        .then((res) => setVote(res.data.totalVote))
        .catch((err) => console.error(err));
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    const isDelete = confirm('Are you sure you want to delete it?');
    if (isDelete) {
      axios.defaults.headers.common['Authorization'] =
        localStorage.getItem('authorization');
      axios
        .delete(`/comments/${commentId}`)
        .then(() => {
          alert('Deleted.');
          location.reload();
        })
        .catch(() => {
          alert('Unable to delete.');
        });
    }
  };
  const adoptionHandler = (e) => {
    e.preventDefault();
    axios.defaults.headers.common['Authorization'] =
      localStorage.getItem('authorization');
    axios
      .patch(`/comments/${commentId}`, {
        adoption: answer.adoption ? false : true,
      })
      .then((res) => {
        console.log(res);
        location.reload();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="answer-container">
      <div className="content-recommend">
        <button
          name="voteUp"
          onClick={voteHandler}
          className="content-up"
        ></button>
        <span className="content-num">{vote}</span>
        <button
          name="voteDown"
          onClick={voteHandler}
          className="content-down"
        ></button>
        {question.memberId === memberId ? (
          <button
            className={`content-chosen-button ${
              answer.adoption ? 'chosen' : ''
            }`}
            onClick={adoptionHandler}
          >
            <svg
              className="svg-icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path>
            </svg>
          </button>
        ) : answer.adoption ? (
          <div className="content-chosen">
            <svg
              className="svg-icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path>
            </svg>
          </div>
        ) : null}
      </div>
      <article className="content-question" data-color-mode="light">
        <MarkdownPreview source={content} className="answer-p" />
        <div className="content-answerInfo">
          <div>
            {answer.memberId === memberId ? (
              <div>
                <Link
                  to={`/edit/answer/${commentId}`}
                  className="auth-button edit"
                >
                  Edit
                </Link>
                <button onClick={deleteHandler} className="auth-button delete">
                  Delete
                </button>
              </div>
            ) : null}
          </div>
          <div className="answer-box">
            <p className="asked-time">{timeParse(createdAt, 'time')}</p>
            <div className="userInfo">
              <a href={process.env.PUBLIC_URL}>
                <img
                  src="http://placeimg.com/24/24/any"
                  alt="answer-avatar"
                  className="answer-avatar"
                ></img>
              </a>
              <a href={process.env.PUBLIC_URL} className="answer-name">
                {answer.username}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function YourAnswer({ questionId }) {
  const [help, setHelp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { isLogin } = useSelector((state) => state);
  const navigate = useNavigate();
  const inputClickHandler = () => {
    setHelp(true);
  };

  const submitAnswerHandler = (e) => {
    e.preventDefault();
    if (!isLogin) navigate('/login');
    else {
      axios.defaults.headers.common['Authorization'] =
        localStorage.getItem('authorization');
      axios
        .post(`/comments/${questionId}`, {
          content: inputValue,
        })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((err) => console.error(err));
    }
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
        <NextButton onClick={submitAnswerHandler}>Post Your Answer</NextButton>
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
