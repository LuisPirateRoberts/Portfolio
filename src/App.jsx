import { Navbar, Hero } from "./components";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}
