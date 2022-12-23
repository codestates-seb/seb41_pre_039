import './Answer.css';

export default function Answer() {
  return (
    <>
      <div className="answer-header">
        <h2>1 Answer </h2>
        <div className="sorted-box">
          <div className="sorted-info">
            <span className="sorted-text">Sorted by:</span>
          </div>
          <div>
            <select name="sorted" className="answer-sorted">
              <option value="hightes score">Hightes score (default)</option>
              <option value="Date created">Date created (oldest first)</option>
            </select>
          </div>
        </div>
      </div>
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
                  <span className="answer-name">Answer</span>
                </div>
              </div>
            </div>
            <br />
            <span className="add-comment">Add a comment</span>
          </article>
        </div>
      </div>
    </>
  );
}
