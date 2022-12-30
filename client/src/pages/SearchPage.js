import { questions } from '../components/initialState';
import QuestionList from '../components/QuestionList';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import { useState } from 'react';
import Pagination from '../components/Pagination';

export default function SerachPage() {
  const [tip, setTip] = useState(false);
  return (
    <>
      <div className="search-container">
        <h1 className="search-title">Search Results</h1>
        <div>
          <button className="search-tips" onClick={() => setTip(!tip)}>
            Advanced Search Tips
          </button>
          <Link className="askQuestion" to="/addquestion">
            Ask Question
          </Link>
        </div>
      </div>
      {tip ? <SerachTips /> : null}
      <div className="search-info">Results for jsx</div>
      <div className="search-info">
        Search options <span>not deleted</span>
      </div>
      <div className="result-button-container">
        <div>61,730 results</div>
        <div className="buttonGroup">
          <button className="btn1">Relevance</button>
          <button>Newest</button>
        </div>
      </div>
      <ul className="Questions">
        {questions.data.map((question) => (
          <QuestionList question={question} key={question.questionId} />
        ))}
      </ul>
      <Pagination />
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
