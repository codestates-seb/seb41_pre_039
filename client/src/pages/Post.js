import Answers from '../components/Answer';
import Question from '../components/Question';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';

/* content 컨테이너 */
const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;

export default function Post() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`/questions/${questionId}`)
      .then((res) => setQuestion(res.data))
      .catch((err) => console.error(err));
    axios
      .get(`/comments/questions/${questionId}`)
      .then((res) => {
        setAnswer(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ContentContainer>
      {isLoading ? undefined : <Loading />}
      <Question question={question} questionId={questionId} />
      <Answers answer={answer} question={question} questionId={questionId} />
    </ContentContainer>
  );
}
