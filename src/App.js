import './App.css';
import Card from './components/shoppingcart/common/Card';
import CardMap from './components/shoppingcart/common/CardMap';
import Index1 from './components/shoppingcart/Index1';
import ShowAllproducts from './components/shoppingcart/ShowAllproducts';
import Slider from './components/shoppingcart/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/shoppingcart/Home';
import Navbar from './components/shoppingcart/Navbar';
import Carts from './components/shoppingcart/common/Carts';
import CartProviding from './components/shoppingcart/CartProviding';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/slider'element ={<Slider />} />
            <Route path='/cardproviding'element ={<CartProviding/>} />
            <Route path='/index' element={<Index1/>}/>
            <Route path='/showallproducts' element={<ShowAllproducts/>}/>
            <Route path='/carts' element={<Carts/>}/>
          </Routes>
          
       
      </div>
    </>
  );
}

export default App;
