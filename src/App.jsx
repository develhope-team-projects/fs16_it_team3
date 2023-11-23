
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Uomo from './components/pages/Uomo'
import Donna from './components/pages/Donna'
import Scarpe from './components/pages/Scarpe'
import { useState } from 'react'
import { CartPage } from './components/CartPage'

function App() {

  const [cart, setCart] = useState([])
  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path='/uomo' element={<Uomo cart={cart} setCart={setCart}/>}> </Route>
      <Route path='/donna' element={<Donna cart={cart} setCart={setCart}/>}> </Route>
      <Route path='/scarpe' element={<Scarpe cart={cart} setCart={setCart}/>}> </Route>
      <Route path='/carello' element={<CartPage cart={cart} setCart={setCart}/>}> </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
