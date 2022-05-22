import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Product from './Pages/Product/Product'
import Review from './Pages/Home/Review'
import Blog from './Pages/Home/Blog'
import Login from './Pages/Login/Login'
import NotFound from './Pages/Shared/NotFound';


function App() {
  return (
    <div  className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='product' element={<Product></Product>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
