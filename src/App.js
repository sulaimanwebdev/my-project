import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './Components/Header'
import Home from './Pages/Home'
import Hem from './Pages/Hem'
import Kontakat from './Pages/Kontakat'
import Inspiration from './Pages/Inspiration'



function App() {
  return (
    <>
  
  <BrowserRouter>

  <Header/>
  <Routes>

    <Route path="/" element={ <Home/> } />
    <Route path="/hem" element={ <Hem/> } />
    <Route path="/inspiration" element={ <Inspiration/> } />
    <Route path="/kontakt" element={ <Kontakat/> } />



  
    </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
