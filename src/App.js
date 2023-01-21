import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <>
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </>
  );
}

export default App;
