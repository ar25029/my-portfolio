import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <main>
      <h1>My Portfolio...</h1>
      <NavBar />
      <Home />
      <About />
      <Academics />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
