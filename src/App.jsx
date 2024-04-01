import React from "react";
import { Navbar, Hero, About, Experience } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative z-0 bg-primary pt-20">
        <div className="bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
      </div>
    </BrowserRouter>
  );
};

export default App;
