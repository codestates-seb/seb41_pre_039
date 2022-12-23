import Answer from '../components/Answer';
import Question from '../components/Question';
import './Post.css';

export default function Post() {
  return (
    <div className="content-container">
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
          <span>Asked</span>
          <span>Modified</span>
          <span>Viewed</span>
        </div>
        <Question />
        <h2>1 Answer</h2>
        <Answer />
      </div>
    </div>
  );
}
