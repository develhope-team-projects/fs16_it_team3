
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


import ShopCategory from './pages/ShopCategory'




function App() {
  

  return (
    
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/scarpe' element={<ShopCategory category="scarpe"/>}/>
        
      
      
      </Routes>
      </BrowserRouter>

      
      
    </div>
  )
}

export default App
