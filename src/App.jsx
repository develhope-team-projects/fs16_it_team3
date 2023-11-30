import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import LoginPage from "./pages/LoginPage";

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
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
