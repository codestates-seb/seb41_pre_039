import { Link } from 'react-router-dom';
import './QuestionList.css';
import timeParse from './time';
const QuestionList = ({ question }) => {
  const answerClassMaker = () => {
    if (question.chosen) {
      return 'postCommentCount adoption';
    } else if (question.commentCount > 0) {
      return 'postCommentCount';
    } else {
      return '';
    }
  };
  const {
    questionId,
    title,
    createdAt,
    modifiedAt,
    commentCount,
    username,
    totalVote,
    viewCount,
    tags,
    chosen,
  } = question;
  return (
    <div className="postContainer">
      <div className="postBox">
        <div className="postStats">
          <div className="postStatVotes">
            <span>{totalVote} </span>votes
          </div>
          <div className={answerClassMaker()}>
            <span>
              {chosen ? (
                <svg
                  width="14"
                  height="14"
                  fill="rgb(255,255,255)"
                  className="comment-count-svg"
                >
                  <path d="M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z"></path>
                </svg>
              ) : null}
              {commentCount}{' '}
            </span>
            answers
          </div>
          <div
            className={`postStatViews ${viewCount >= 1000 ? 'oneKUpper' : ''}`}
          >
            <span>{viewCount} </span>views
          </div>
        </div>
        <div className="postContent">
          <h3 className="postTitle">
            <Link to={`/question/${questionId}`}>{title}</Link>
          </h3>
          <div className="postMeta">
            <ul className="postTag">
              {tags.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
            <div className="postCard">
              <div className="userImg">
                <img src="http://placeimg.com/24/24/any" alt="user avatar" />
              </div>
              <div className="userID">{username}</div>
              <div className="modified">
                {new Date(modifiedAt) <= new Date(createdAt)
                  ? `asked ${timeParse(createdAt, 'time')}`
                  : `modified ${timeParse(modifiedAt, 'time')}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
