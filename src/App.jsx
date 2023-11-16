import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home"
import Navbar from "./components/Navbar";

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
        
      </footer>
    </>
  );
};

export default App;
