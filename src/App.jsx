
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Uomo from './components/pages/Uomo'
import Donna from './components/pages/Donna'
import Scarpe from './components/pages/Scarpe'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/uomo' element={<Uomo/>}> </Route>
      <Route path='/donna' element={<Donna/>}> </Route>
      <Route path='/scarpe' element={<Scarpe/>}> </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
