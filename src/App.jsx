import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Uomo from "./components/pages/Uomo";
import Donna from "./components/pages/Donna";
import Scarpe from "./components/pages/Scarpe";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  const navigate = useNavigate();
  const hideNavbarOnLogin = () => {
    navigate("/login");
  };
  const shouldShowNavbar = () => {
    return window.location.pathname !== "/login";
  };

  return (
    <>
      {shouldShowNavbar() && (
        <nav>
          <Navbar />
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} action={hideNavbarOnLogin} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/uomo" element={<Uomo />} />
          <Route path="/donna" element={<Donna />} />
          <Route path="/scarpe" element={<Scarpe />} />
          <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
