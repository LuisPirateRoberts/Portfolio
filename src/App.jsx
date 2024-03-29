import { Navbar, Hero, About } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar />
        <Hero />
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
