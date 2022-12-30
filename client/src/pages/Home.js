import './Home.css';
import { questions, answer } from '../components/initialState';
import QuestionList from '../components/QuestionList';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

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
          <QuestionList key={question.questionId} />
        ))}
      </ul>
      <Pagination />
    </>
  );
}
