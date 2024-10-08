import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import { HashRouter } from 'react-router-dom';
import About from './About';
import Create from './Create';
import Drawings from './Drawings';
import Profile from './Profile';
import Settings from './Settings';
import SideBar from './Home/sidebar';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <div style={{ height: 75 }}>
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
