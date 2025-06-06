import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Experience from './components/Experience';
import { Analytics } from "@vercel/analytics/react"
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        
      </div>
    </div>
  );
};

export default App;