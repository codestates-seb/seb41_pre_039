import { Link } from 'react-router-dom';
import './QuestionList.css';
import timeParse from './time';

const QuestionList = ({ question }) => {
  return (
    <div className="postContainer">
      <div className="postBox">
        <div className="postStats">
          <div className="postStatVotes">
            <div>
              {/* question vote 필요 */}
              <span>{0} </span>votes
            </div>
          </div>
          <div className="postStatAnsers">
            <div>
              <span>{question.commentCount} </span>answers
            </div>
          </div>
          <div className="postStatViews">
            <div>
              <span>{question.viewCount} </span>views
            </div>
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
