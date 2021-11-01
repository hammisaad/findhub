import logo from "./assets/github-logo.png";
import Search from "./components/Search";

import "./App.css";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="github" className="github-logo" />
        <Typography variant="h5" color="primary" style={{ fontWeight: 700 }}>
          findHUB
        </Typography>
      </header>
      <Search />
    </div>
  );
}

export default App;
