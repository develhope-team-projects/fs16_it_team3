
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Uomo from './components/pages/Uomo'
import Donna from './components/pages/Donna'
import Scarpe from './components/pages/Scarpe'
import ProductDetail from './components/ProductDetail'


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/uomo' element={<Uomo/>}> </Route>
      <Route path='/donna' element={<Donna/>}> </Route>
      <Route path='/scarpe' element={<Scarpe/>}> </Route>
      <Route path='/product/:id' element={<ProductDetail />}/>
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
