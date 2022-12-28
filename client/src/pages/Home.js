import './Home.css';
import dummy from '../db/data.json';
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
        {dummy.data.map((v) => (
          <QuestionList dummy={v} key={v.questionId} />
        ))}
      </ul>
    </>
  );
}
