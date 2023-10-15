import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Internal Dependencies
import Home from "./components/Home";
import Validator from "./components/validator";
import theme from "./theme";

// Local Variables
const StyledAppWrapper = styled("div")(({ theme }) => ({
  backgroundImage: 'url(https://images6.alphacoders.com/874/874542.jpg)',
  backgroundSize:'cover',
  height: '100vh', 
  width: '100vw',
  overflow: 'hidden',
}));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapper>
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
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
