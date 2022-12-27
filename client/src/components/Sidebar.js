import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar--container">
      <aside>
        <ul className="sidebar-nav">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname.match(/question/g) ? 'active' : ''}>
            <Link to="/question">Questions</Link>
          </li>
          <li className={location.pathname.match(/user/g) ? 'active' : ''}>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
