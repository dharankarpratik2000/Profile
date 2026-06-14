import { Suspense, lazy } from "react";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <header className="hero">
        <h1>Pratik Dharankar</h1>
        <p>Frontend Developer | React Developer</p>
      </header>

      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;