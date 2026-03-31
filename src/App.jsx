import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import MainSection from './components/MainSection.jsx';



function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
   
      <Navbar cartCount={cart.length} />
      <HeroSection />
      <MainSection cart={cart} setCart={setCart} />
    </>
  );
}
export default App
