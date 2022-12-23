import './Answer.css';

export default function Answer() {
  return (
    <div className="content-layout">
      <div className="answer-container">
        <div className="content-recommend">
          <span className="content-up"></span>
          <span className="content-num">0</span>
          <span className="content-down"></span>
        </div>
        <article className="content-question">
          <p className="answer-p">
            Is there a way to change the color of the following slide of the
            CRAN package shinyWidgets? Thanks in advance. I need to do it also
            in within the update function.
          </p>
          <div className="answer-codeBox">
            <div className="answer-code">
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
            </div>
          </div>
          <br />
          <div className="content-answerInfo">
            <span className="content-edit">edit</span>
            <div className="answer-box">
              <p className="asked-time">asked 58 mins ago</p>
              <div className="userInfo">
                <img
                  src="http://placeimg.com/24/24/any"
                  alt="answer-avatar"
                  className="answer-avatar"
                ></img>
                <span className="answer-name">RRuiz</span>
              </div>
            </div>
          </div>
          <br />
          <span className="add-comment">Add a comment</span>
        </article>
      </div>
    </div>
  );
}
