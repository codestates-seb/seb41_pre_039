import styled from 'styled-components';
import './Pagination.css';
import { questions } from './initialState';

const PageButton = styled.a`
  border: 1px solid #d7d9dc;
  border-radius: 3px;
  padding: 5px 8px;
  background-color: transparent;
  margin-right: 3px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: hsl(216deg 7% 85%);
    border-color: hsl(207deg 7% 75%);
  }
  &:active {
    background-color: hsl(27deg 90% 55%);
    border-color: transparent;
  }
`;

export default function Pagination() {
  const pageNum = [1, 2, 3, 4, 5];
  // for (
  //   let i = 1;
  //   i <= Math.ceil(questions.pageInfo.totalPages / questions.pageInfo.size);
  //   i++
  // ) {
  //   pageNum.push(i);
  // }
  return (
    <>
      <div className="pagination-container">
        {pageNum.map((el, i) => (
          <PageButton key={i}>{el}</PageButton>
        ))}
      </div>
    </>
  );
}
