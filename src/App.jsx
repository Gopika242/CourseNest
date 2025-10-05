import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Alumni from "./components/Alumni";

const LandingPage = () => {
  return (
    <div className="scroll-smooth">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="alumni"><Alumni /></section>
      <section id="courses"><Courses /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="#signup" element={<SignUp />} /> */}
        {/* Add more separate pages if needed */}
      </Routes>
    </Router>
  );
};

export default App;
