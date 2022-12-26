import styled from 'styled-components';
import './UserProfile.css';

const EllipseButton = styled.a`
  display: flex;
  padding: 6px 12px;
  border-radius: 1000px;
  background-color: transparent;
  color: #525960;
  font-size: 14px;
  margin-right: 3px;
  &:hover {
    background-color: #e3e6e8;
    cursor: pointer;
  }
  &.active {
    background-color: #f48225;
    color: #fff;
  }
  &.active:hover {
    background-color: #ba680b;
    cursor: pointer;
  }
`;

const Stat = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-size: 14px;
  color: #525960;
  font-weight: normal;
  margin: 10px 0;
  span {
    font-size: 18px;
  }
`;

const ListWrapper = styled.ul`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d6d9dc;
  margin-bottom: 16px;
  li {
    padding: 12px;
    border-bottom: 1px solid #ccc;
    &:last-of-type {
      border: none;
    }
    display: flex;
    align-items: center;
    .badge {
      color: #39739d;
      border: 1px solid #d6d9dc;
      border-radius: 3px;
      padding: 0px 8px;
      font-size: 12px;
      margin-right: 10px;
      div {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    a {
      display: block;
      flex: 1 0;
      color: #39739d;
      text-decoration: none;
    }
    .date {
      color: #6a737c;
      font-size: 13px;
    }
  }
`;

const UserProfile = () => {
  return (
    <section className="userProfile-container">
      <div className="userProfile-userinfo">
        <div className="userProfile-userinfo--editButton">
          <button>
            <svg
              aria-hidden="true"
              className="svg-icon iconPencil"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z"></path>
            </svg>
            Edit profile
          </button>
        </div>
        <img
          className="userProfile-userinfo--userImage"
          src="http://placeimg.com/128/128/any"
          alt="user"
        />
        <div className="userProfile-userinfo--user">
          <h3>UserName</h3>
          <div>
            <span>
              <svg
                aria-hidden="true"
                className="svg-icon iconCake"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
              </svg>
              Member for 0 days
            </span>
            <span>
              <svg
                aria-hidden="true"
                className="svg-icon iconClock"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z"></path>
              </svg>
              Last seen this week
            </span>
            <span>
              <svg
                aria-hidden="true"
                className="svg-icon iconCalendar"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14 2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2ZM3 6v9h12V6H3Zm2 2h2v2H5V8Zm0 3h2v2H5v-2Zm3 0h2v2H8v-2Zm3 0h2v2h-2v-2Zm0-3h2v2h-2V8ZM8 8h2v2H8V8Z"></path>
              </svg>
              Visited 6 days, 5 consecutive
            </span>
          </div>
        </div>
      </div>
      <nav className="userProfile-sidemenu">
        <ul>
          <li>
            <EllipseButton className="active">Profile</EllipseButton>
          </li>
          <li>
            <EllipseButton>Settings</EllipseButton>
          </li>
        </ul>
      </nav>
      <section className="userProfile-contents">
        <div className="userProfile-contents--column-stats">
          <article className="userProfile-contents--stats">
            <h4>Stats</h4>
            <div>
              <Stat>
                <span>1</span>
                reputation
              </Stat>
              <Stat>
                <span>1</span>
                reached
              </Stat>
              <Stat>
                <span>1</span>
                answers
              </Stat>
              <Stat>
                <span>1</span>
                questions
              </Stat>
            </div>
          </article>
        </div>
        <div className="userProfile-contents--column-content">
          <article className="userProfile-contents--about">
            <h4>About</h4>
            <p>
              hello world hello world hello world hello world hello world hello
              world hello world hello world hello world hello world hello world
              hello world hello world hello world hello world hello world hello
              world hello world hello world hello world
            </p>
          </article>
          <article className="userProfile-contents--answers">
            <h4>Answers</h4>
            <List />
          </article>
          <article className="userProfile-contents--questions">
            <h4>Questions</h4>
            <List />
          </article>
        </div>
      </section>
    </section>
  );
};

const List = () => {
  return (
    <ListWrapper>
      <li>
        <span className="badge">
          <div>1</div>
        </span>
        <a href="%PUBLIC_URI%">title</a>
        <span className="date">
          {new Date().toLocaleDateString('en-us', { dateStyle: 'medium' })}
        </span>
      </li>
      <li>
        <span className="badge">
          <div>1</div>
        </span>
        <a href="%PUBLIC_URI%">title</a>
        <span className="date">
          {new Date().toLocaleDateString('en-us', { dateStyle: 'medium' })}
        </span>
      </li>
      <li>
        <span className="badge">
          <div>1</div>
        </span>
        <a href="%PUBLIC_URI%">title</a>
        <span className="date">
          {new Date().toLocaleDateString('en-us', { dateStyle: 'medium' })}
        </span>
      </li>
      <li>
        <span className="badge">
          <div>1</div>
        </span>
        <a href="%PUBLIC_URI%">title</a>
        <span className="date">
          {new Date().toLocaleDateString('en-us', { dateStyle: 'medium' })}
        </span>
      </li>
      <li>
        <span className="badge">
          <div>1</div>
        </span>
        <a href="%PUBLIC_URI%">title</a>
        <span className="date">
          {new Date().toLocaleDateString('en-us', { dateStyle: 'medium' })}
        </span>
      </li>
    </ListWrapper>
  );
};

export default UserProfile;
