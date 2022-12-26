import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionList from './components/QuestionList';
import Home from './pages/Home';

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
          <Home />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
