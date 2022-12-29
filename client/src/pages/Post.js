import Answers from '../components/Answer';
import Question from '../components/Question';
import styled from 'styled-components';

/* content 컨테이너 */
const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;

export default function Post() {
  return (
    <ContentContainer>
      <Question />
      <Answers />
    </ContentContainer>
  );
}
