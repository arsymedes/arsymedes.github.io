import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  const [isNavOpen, setNavOpen] = useState(true);

  return (
    <>
      <Nav isNavOpen={isNavOpen} />
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </>
  );
}

export default App;
