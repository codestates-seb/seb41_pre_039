import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          {/* 내용을 채우기 위한 임시 요소 */}
          <div>pages</div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
