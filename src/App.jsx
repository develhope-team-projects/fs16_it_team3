import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"

const App = () => {
  
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
