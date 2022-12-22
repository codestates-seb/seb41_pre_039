import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar--container">
      <aside>
        <ul className="sidebar-nav">
          <li className="active">Home</li>
          <li>Questions</li>
          <li>Users</li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
