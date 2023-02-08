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
import SerachPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import EditQuestion from './pages/EditQuestion';
import EditAnswer from './pages/EditAnswer';
import { useDispatch } from 'react-redux';
import { login, logout } from './action';
import axios from 'axios';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();

  axios.defaults.baseURL =
    'http://ec2-54-180-132-90.ap-northeast-2.compute.amazonaws.com:8080';

  useEffect(() => {
    if (
      location.pathname.match(/question|user|edit|search/g) ||
      location.pathname.slice(1).length === 0
    )
      setIsSidebar(true);
    else setIsSidebar(false);
  }, [location]);

  // ! 토큰 인증 api 나오면 교체해야 함.
  useEffect(() => {
    if (localStorage.getItem('authorization')) dispatch(login(1));
    else dispatch(logout());
  }, []);

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
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<Home />} />
            <Route path="/question/:questionId" element={<Post />} />
            <Route path="/addquestion" element={<AddQuestion />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/user/setting" element={<UserProfileSetting />} />
            <Route path="/user/delete" element={<DeleteProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/edit/question/:questionId"
              element={<EditQuestion />}
            />
            <Route path="/edit/answer/:commentId" element={<EditAnswer />} />
            <Route path="/search/:word" element={<SerachPage />} />
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
