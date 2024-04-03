import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Header from './ui/Header';

export default function App() {
  return (
    <div className="bg-white-bg">
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <Workflow />
      <Contact />
    </div>
  );
}
