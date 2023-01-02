import './Home.css';
import Loading from '../components/Loading';
import QuestionList from '../components/QuestionList';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLogin } = useSelector((state) => state);
  const [questionData, setQuestionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios.get('/questions').then((res) => {
      setQuestionData(res.data);
      setIsLoading(true);
    });
  }, []);

  return (
    <>
      {isLoading ? undefined : <Loading />}
      <div className="homeContainer">
        <h1 className="homeTitle">Top Questions</h1>
        <Link to={isLogin ? '/addquestion' : '/login'} className="askQuestion">
          Ask Question
        </Link>
      </div>
      <div className="buttonContainer">
        <div className="buttonGroup">
          <button className="active">Interesting</button>
          <button>Bountied</button>
          <button>Hot</button>
          <button>Week</button>
          <button>Month</button>
        </div>
      </div>
      <ul className="Questions">
        {questionData.map((question) => (
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
