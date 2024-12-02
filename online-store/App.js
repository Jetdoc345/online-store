import "./App.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Catalog from "./pages/catalog.jsx";
import About from "./pages/about.jsx";
import Admin from './pages/;
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import ShoppingList from './pages/shoppingList.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />

    <Routes>

      <Catalog />
      <Admin />
      <About />

    </Routes>

      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;

/**
 * 
 * Create a Home page
 * create the page and css
 * 
 * import it on app.js
 * create a route on /home for the Home page
 */


