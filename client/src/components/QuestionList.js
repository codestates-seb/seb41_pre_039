import React from 'react';
import './QuestionList.css';
import dummy from '../db/data.json';

const QuestionList = ({ dummy }) => {
  return (
    <div className="postContainer">
      <div className="postBox">
        <div className="postStats">
          <div className="postStatVotes">
            <div>
              <span>0 </span>votes
            </div>
          </div>
          <div className="postStatAnsers">
            <div>
              <span>{dummy.commentCount} </span>answers
            </div>
          </div>
          <div className="postStatViews">
            <div>
              <span>{dummy.viewCount} </span>views
            </div>
          </div>
        </div>
        <div className="postContent">
          <h3 className="postTitle">{dummy.title}</h3>
          <div className="postMeta">
            <ul className="postTag">
              <li>tag</li>
              <li>tag</li>
              <li>tagtag</li>
              <li>tagtag</li>
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
              <div className="modified">modified 10secs ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
