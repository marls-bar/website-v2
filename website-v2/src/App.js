import "./index.css";
import './App.css';
import Navbar from "./Navigation/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";

import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;