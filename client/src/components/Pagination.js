import styled from 'styled-components';
import './Pagination.css';

const Button = styled.button`
  border: 1px solid;
  border-color: ${({ val, curVal }) =>
    val === curVal ? 'transparent' : '#d7d9dc'};
  border-radius: 3px;
  padding: 5px 8px;
  background-color: ${({ val, curVal }) =>
    val === curVal ? 'hsl(27deg 90% 55%)' : 'transparent'};
  color: ${({ val, curVal }) => (val === curVal ? '#fff' : '#000')};
  margin-right: 3px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: ${({ val, curVal }) =>
      val === curVal ? 'hsl(27deg 90% 55%)' : 'hsl(207deg 7% 75%)'};
    border-color: ${({ val, curVal }) =>
      val === curVal ? 'transparent' : 'hsl(216deg 7% 85%)'};
  }
`;

export default function Pagination({ searchPageInfo, setPage, setSize }) {
  const { page: curPage, size: curSize, totalPages } = searchPageInfo;
  const pageNum = new Array(totalPages).fill(0).map((_, idx) => idx + 1);
  return (
    <>
      <div className="pagination-container">
        <ul className="pagination--pages">
          {pageNum.map((page, i) => (
            <li key={i}>
              <Button val={page} curVal={curPage} onClick={() => setPage(page)}>
                {page}
              </Button>
            </li>
          ))}
        </ul>
        <ul className="pagination--size">
          <li>
            <Button
              val={15}
              curVal={curSize}
              onClick={() => {
                setSize(15), setPage(1);
              }}
            >
              15
            </Button>
          </li>
          <li>
            <Button
              val={30}
              curVal={curSize}
              onClick={() => {
                setSize(30), setPage(1);
              }}
            >
              30
            </Button>
          </li>
          <li>
            <Button
              val={50}
              curVal={curSize}
              onClick={() => {
                setSize(50), setPage(1);
              }}
            >
              50
            </Button>
          </li>
          <li>per page</li>
        </ul>
      </div>
    </>
  );
}
