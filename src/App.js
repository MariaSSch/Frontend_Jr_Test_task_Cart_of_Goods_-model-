import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Catalog from './pages/Catalog/Catalog';

import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route index element = {<Catalog />} /> 
          <Route path="/app/cart" element = {<Cart />} />
          <Route path="/app/:id" element = {<Product />} />
        </Routes>
      </div>
  );
}

export default App;

