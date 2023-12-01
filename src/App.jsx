import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Uomo from './components/pages/Uomo';
import Donna from './components/pages/Donna';
import Scarpe from './components/pages/Scarpe';
import { useEffect, useState } from 'react';
import { CartPage } from './components/CartPage';
import Cookies from 'js-cookie';

function App() {
  const initialCart = Cookies.get('cartArray');
  const [cart, setCart] = useState(initialCart ? JSON.parse(initialCart) : []);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    Cookies.set('cartArray', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/uomo' element={<Uomo cart={cart} setCart={setCart} message={message} setMessage={setMessage} />}></Route>
          <Route path='/donna' element={<Donna cart={cart} setCart={setCart} />}></Route>
          <Route path='/scarpe' element={<Scarpe cart={cart} setCart={setCart} />}></Route>
          <Route path='/carello' element={<CartPage cart={cart} setCart={setCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
