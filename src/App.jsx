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
import { useEffect, useState } from "react";
import { CartPage } from './components/CartPage';
import Cookies from 'js-cookie';

const App = () => {
  const initialCart = Cookies.get('cartArray');
  const [cart, setCart] = useState(initialCart ? JSON.parse(initialCart) : []);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    Cookies.set('cartArray', JSON.stringify(cart));
  }, [cart]);

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
        <Route path='/uomo' element={<Uomo cart={cart} setCart={setCart}  />}></Route>
          <Route path='/donna' element={<Donna cart={cart} setCart={setCart} />}></Route>
          <Route path='/scarpe' element={<Scarpe cart={cart} setCart={setCart} />}></Route>
          <Route path='/carrello' element={<CartPage cart={cart} setCart={setCart} />}></Route>
          <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
