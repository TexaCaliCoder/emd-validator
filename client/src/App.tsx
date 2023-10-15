import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Internal Dependencies
import Home from "./components/Home";
import Validator from './components/validator'



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/validator">Validator</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/validator" element={<Validator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
