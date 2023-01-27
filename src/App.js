import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/About";
import { useCycle } from "framer-motion";

function App() {
  const [isNavOpen, setNavOpen] = useCycle(false, true);

  return (
    <>
      <Nav isNavOpen={isNavOpen} />
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <main className="bg-gray-50 px-[10vw] md:px-12 lg:px-32 flex flex-col gap-20">
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
