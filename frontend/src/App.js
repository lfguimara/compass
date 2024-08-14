import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Product from './Pages/Product'
import LoginSingnup from './Pages/loginSingnup'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shops' element={<ShopCategory/>} />
          <Route path='/abouts' element={<ShopCategory/>} />
          <Route path='/contacts' element={<ShopCategory/>} />
          <Route path="/product" element={<Product/>}> 
            <Route path='productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSingnup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
