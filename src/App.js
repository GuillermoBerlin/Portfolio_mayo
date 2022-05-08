import './App.css';
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Cover />
      <AboutMe />
      <Projects />
      <Contact />
    </Router>  
    </div>
  );
}

export default App;
