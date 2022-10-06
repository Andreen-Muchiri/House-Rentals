import './App.css';
import About from './components/About';
import Contact from './components/Contact';

import { Navbar } from './components/index'
import { Home } from './components/index'
import { Property } from './components/index'
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
   
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/property" element={<Property />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    {/* <Home /> */}
    <About/>
    <Property />
    <Contact/> 
    
    </div>
  );
}

export default App;
