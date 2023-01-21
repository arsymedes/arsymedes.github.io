import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} /> */}
      <Nav />
    </>
  );
}

export default App;
