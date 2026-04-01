import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import MainSection from './components/MainSection.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepsSection from './components/StepsSection.jsx';
import PricingSection from './components/PricingSection.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products from public/products.json
 useEffect(() => {
    fetch('/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err));
}, []);

  return (
    <>
      {/* Navbar with cart count */}
      <Navbar cartCount={cart.length} />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Section with products */}
      <MainSection cart={cart} setCart={setCart} products={products} />

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
        
       <StepsSection />
      <PricingSection />
    </>
  );
}

export default App;