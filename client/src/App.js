import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">Header</div>

      <div className="container">
        <div className="sidebar">Sidebar</div>
        <div className="content">Main</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
export default App;
