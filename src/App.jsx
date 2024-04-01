import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Header from './ui/Header';

export default function App() {
  return (
    <div className="bg-white-bg w-full ">
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
    </div>
  );
}
