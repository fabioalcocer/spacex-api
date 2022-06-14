import "./App.css";
import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import LaunchDetails from "./components/LaunchDetails";
import LaunchList from "./components/LaunchList";
import logo from "./assets/logo-spacex.png";

function App() {
  return (
    <div className="App">
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </div>
  );
}

export default App;
