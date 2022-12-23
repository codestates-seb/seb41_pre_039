import './Question.css';

export default function Question() {
  return (
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
            <div className="question-code">
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
          <div className="content-tag">
            <span className="tag-span">태그</span>
            <span className="tag-span">태그</span>
            <span className="tag-span">태그</span>
          </div>
          <div className="content-writerInfo">
            <span className="content-edit">edit</span>
            <div className="writer-box">
              <p className="asked-time">asked 58 mins ago</p>
              <div className="userInfo">
                <img
                  src="http://placeimg.com/24/24/any"
                  alt="writer-avatar"
                  className="writer-avatar"
                ></img>
                <span className="writer-name">RRuiz</span>
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
