import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Player from "./Player";
import Sign from "./Sign";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/players" element={<Player/>} />
        <Route path="/sign" element={<Sign/>} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<About/>} />
        <Routes path="/home" element={<Home/>} />
      </Routes> */}
    </Router>
  );
}

export default AppRouter;
