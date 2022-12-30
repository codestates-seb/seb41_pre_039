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
  // question에 commentCount 1 이상일 때 css 변경
  // answer adoption(boolean) true면 체크 활성화
  return (
    <div className="postContainer">
      <div className="postBox">
        <div className="postStats">
          <div className="postStatVotes">
            {/* question vote 필요 */}
            <span>{0} </span>votes
          </div>
          <div className={answerClassMaker()}>
            <span>
              {question.chosen ? (
                <svg
                  width="14"
                  height="14"
                  fill="rgb(255,255,255)"
                  className="comment-count-svg"
                >
                  <path d="M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z"></path>
                </svg>
              ) : null}
              {question.commentCount}{' '}
            </span>
            answers
          </div>
          <div
            className={`postStatViews ${
              question.viewCount >= 1000 ? 'oneKUpper' : ''
            }`}
          >
            <span>{question.viewCount} </span>views
          </div>
        </div>
        <div className="postContent">
          <h3 className="postTitle">
            <Link to={`/question/${question.questionId}`}>
              {question.title}
            </Link>
          </h3>
          <div className="postMeta">
            <ul className="postTag">
              {question.tags.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
            <div className="postCard">
              <div className="userImg">
                <img
                  src="http://placeimg.com/24/24/any"
                  alt="user avatar"
                ></img>
              </div>
              <div className="userID">user ID</div>
              <div className="userRep">27k</div>
              <div className="modified">
                modified {timeParse(question.modifiedAt, 'time')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
