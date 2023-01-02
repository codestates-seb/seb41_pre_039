import QuestionList from '../components/QuestionList';
import { Link, useParams } from 'react-router-dom';
import './SearchPage.css';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import axios from 'axios';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

export default function SerachPage() {
  const [tip, setTip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [sort, setSort] = useState('totalVote');
  const { word } = useParams();
  const [searchData, setSearchData] = useState([]);
  const [searchPageInfo, setSearchPageInfo] = useState({});
  const { isLogin } = useSelector((state) => state);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(
        `/questions/sort?page=${page}&size=${size}&sort=${sort}&search=${word}`
      )
      .then((res) => {
        console.log(res.headers);
        setSearchData(res.data.data);
        setSearchPageInfo(res.data.pageInfo);
        setIsLoading(true);
      })
      .catch((err) => console.error(err));
  }, [page, size, word, sort]);
  return (
    <>
      {isLoading ? undefined : <Loading />}
      <div className="search-container">
        <h1 className="search-title">Search Results</h1>
        <div>
          <button className="search-tips" onClick={() => setTip(!tip)}>
            Advanced Search Tips
          </button>
          <Link
            className="askQuestion"
            to={isLogin ? '/addquestion' : '/login'}
          >
            Ask Question
          </Link>
        </div>
      </div>
      {tip ? <SerachTips /> : null}
      <div className="search-info">Results for {word}</div>
      <div className="search-info">
        Search options <span>not deleted</span>
      </div>
      <div className="result-button-container">
        <div>{searchPageInfo.totalElements} results</div>
        <div className="buttonGroup">
          <button
            className={sort === 'totalVote' ? 'active' : ''}
            onClick={() => setSort('totalVote')}
          >
            Relevance
          </button>
          <button
            className={sort === 'createdAt' ? 'active' : ''}
            onClick={() => setSort('createdAt')}
          >
            Newest
          </button>
        </div>
      </div>
      <ul className="Questions">
        {searchData?.map((question) => (
          <QuestionList question={question} key={question.questionId} />
        ))}
      </ul>
      <Pagination
        searchPageInfo={searchPageInfo}
        setPage={setPage}
        setSize={setSize}
      />
    </>
  );
}

function SerachTips() {
  return (
    <>
      <table className="tips-table">
        <thead>
          <tr>
            <th>Search type</th>
            <th>Search syntax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Tags</th>
            <td>[ tag ]</td>
          </tr>
          <tr>
            <th>Exact</th>
            <td>&quot;words here&quot;</td>
          </tr>
          <tr>
            <th>Author</th>
            <td>
              user:1234
              <br />
              user:me (yours)
            </td>
          </tr>
          <tr>
            <th>Score</th>
            <td>
              score:3 <span>(3+)</span>
              <br />
              score:0 <span>(none)</span>
            </td>
          </tr>
          <tr>
            <th>Answers</th>
            <td>
              answers:3 <span>(3+)</span>
              <br />
              answers:0 <span>(none)</span>
              <br />
              isaccpted:yes
              <br />
              hasaccepted:no
              <br />
              inquestion:1234
            </td>
          </tr>
          <tr>
            <th>Views</th>
            <td>views:250</td>
          </tr>
          <tr>
            <th>Code</th>
            <td>code:&quot;if (foo != bar)&quot;</td>
          </tr>
          <tr>
            <th>Sections</th>
            <td>
              title:apples
              <br />
              body:&quot;apples oranges&quot;
            </td>
          </tr>
          <tr>
            <th>URL</th>
            <td>url:&quot;*.example.com&quot;</td>
          </tr>
          <tr>
            <th>Saves</th>
            <td>in:saves</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>
              closed:yes
              <br />
              duplicate:no
              <br />
              migrated:no
              <br />
              wiki:no
            </td>
          </tr>
          <tr>
            <th>Types</th>
            <td>
              is:question
              <br />
              is:answers
              <br />
              is:article
            </td>
          </tr>
          <tr>
            <th>Exclude</th>
            <td>
              -[ tag ]
              <br />
              -apples
            </td>
          </tr>
          <tr>
            <th>Collective</th>
            <td>collective:&quot;Name&quot;</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
