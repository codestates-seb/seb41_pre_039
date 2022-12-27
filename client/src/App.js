import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Post from './pages/Post';
import Home from './pages/Home';
import AddQuestion from './pages/AddQuestion';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className={`content ${isSidebar ? '' : 'none-sidebar'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/question" element={<Post />} />
              <Route path="/addquestion" element={<AddQuestion />} />
              {/* User 컴포넌트로 수정 필요 */}
              <Route path="/user" element={<AddQuestion />} />
              {/* Setting 컴포넌트로 수정 필요 */}
              <Route path="/user/setting" element={<AddQuestion />} />
              {/* Delete 컴포넌트로 수정 필요 */}
              <Route path="/user/delete" element={<AddQuestion />} />
              <Route path="/login" element={<Login />} />
              {/* SignUp 컴포넌트로 수정 필요 */}
              <Route path="/signup" element={<Login />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
