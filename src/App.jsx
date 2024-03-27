import { Navbar, Hero } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
