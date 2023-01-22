import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { useCycle } from "framer-motion";

function App() {
  const [isNavOpen, setNavOpen] = useCycle(false, true);

  return (
    <>
      <Nav isNavOpen={isNavOpen} />
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <main className="bg-[]">
        <Hero />
      </main>
    </>
  );
}

export default App;
