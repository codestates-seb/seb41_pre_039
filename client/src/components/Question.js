import styled from 'styled-components';
import './Question.css';

const TagA = styled.a`
  padding: 4.8px 6px;
  height: 23px;
  margin-right: 5px;
  background-color: #d9eaf7;
  border-radius: 3px;
  font-size: 12px;
  color: hsl(205deg 47% 42%);
`;
export default function Question() {
  return (
    <>
      <div className="content-header">
        <div className="content-title">
          <span className="title-h">
            <h1>Change color of Slider Text Input Widget in Shiny R?</h1>
          </span>
          <div className="question-ask">
            <button className="ask-button">Ask Question</button>
          </div>
        </div>
        <div className="question-info">
          <span className="info">Asked</span>
          <span className="info">Modified</span>
          <span className="info">Viewed</span>
        </div>
      </div>
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
              <TagA href="%PUBLIC_URL%">태그</TagA>
            </div>
            <div className="content-writerInfo">
              <a href="%PUBLIC_URL%" className="content-edit">
                Edit
              </a>
              <div className="writer-box">
                <p className="asked-time">asked 58 mins ago</p>
                <div className="userInfo">
                  <a href="%PUBLIC_URL%">
                    <img
                      src="http://placeimg.com/24/24/any"
                      alt="writer-avatar"
                      className="writer-avatar"
                    ></img>
                  </a>
                  <a href="%PUBLIC_URL%" className="writer-name">
                    Writer
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
