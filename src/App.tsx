import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
