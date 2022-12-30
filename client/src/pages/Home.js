import './Home.css';
import { questions } from '../components/initialState';
import QuestionList from '../components/QuestionList';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <h1 className="homeTitle">Top Questions</h1>
        <Link className="askQuestion" to="/addquestion">
          Ask Question
        </Link>
      </div>
      <div className="buttonContainer">
        <div className="buttonGroup">
          <button className="btn1">Interesting</button>
          <button>Bountied</button>
          <button>Hot</button>
          <button>Week</button>
          <button className="btn5">Month</button>
        </div>
      </div>
      <ul className="Questions">
        {questions.data.map((question) => (
          <QuestionList question={question} key={question.questionId} />
        ))}
      </ul>
      <div className="question-footer-container">
        <p className="question-footer-text">
          Looking for more? Browse the{' '}
          <a href="http://localhost:3000/">complete list of questions</a>, or{' '}
          <a href="https://stackoverflow.com/tags">popular tags</a>.
        </p>{' '}
        <p className="question-footer-text">
          Help us answer{' '}
          <a href="http://localhost:3000/">unanswered questions</a>.
        </p>
      </div>
    </>
  );
}
