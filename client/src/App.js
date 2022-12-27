import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Post from './pages/Post';
import Home from './pages/Home';
import AddQuestion from './pages/AddQuestion';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import UserProfileSetting from './pages/UserProfileSetting';
import DeleteProfile from './pages/DeleteProfile';
import { useEffect, useState } from 'react';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.match(/login|signup/g)) setIsSidebar(false);
    else setIsSidebar(true);
  }, [location]);
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className={`container ${isSidebar ? '' : 'none-sidebar'}`}>
        {isSidebar ? (
          <div className="sidebar">
            <Sidebar />
          </div>
        ) : undefined}
        <div className={`content ${isSidebar ? '' : 'none-sidebar'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<Post />} />
            <Route path="/addquestion" element={<AddQuestion />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/user/setting" element={<UserProfileSetting />} />
            <Route path="/user/delete" element={<DeleteProfile />} />
            <Route path="/login" element={<Login />} />
            {/* SignUp 컴포넌트로 수정 필요 */}
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
      {isSidebar ? (
        <div className="footer">
          <Footer />
        </div>
      ) : undefined}
    </div>
  );
}
export default App;
