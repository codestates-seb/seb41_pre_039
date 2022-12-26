import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar--container">
      <aside>
        <ul className="sidebar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Questions</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
