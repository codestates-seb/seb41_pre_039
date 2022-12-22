import './Question.css';

export default function Question() {
  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-title">
          <span className="title-h">
            <h1>Title</h1>
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
      </div>
    </div>
  );
}
