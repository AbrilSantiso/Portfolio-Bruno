import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects } from "./components";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>
        <Projects />
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Reviews />
        </div>

        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
