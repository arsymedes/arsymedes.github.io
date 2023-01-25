import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { useCycle } from "framer-motion";

function App() {
  const [isNavOpen, setNavOpen] = useCycle(false, true);

  return (
    <>
      <Nav isNavOpen={isNavOpen} />
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <main className="">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
