import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
// import Product from './Pages/Product/Products'
import Review from './Pages/Home/Review'
import Blog from './Pages/Home/Blog'
import Login from './Pages/Login/Login'
import NotFound from './Pages/Shared/NotFound';

import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth'
import PurchasePage from './Pages/Product/PurchasePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile.js';
import MyReview from './Pages/Dashboard/MyReview.js';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AllUsers from './Pages/Dashboard/AllUsers';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import SeeProfile from './Pages/Dashboard/SeeProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';


function App() {
  return (
    <div  className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/parts/:partsId' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
        {/* //////////////////////NESTED ROUTES////////////////////////// */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route  path='review' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='seeProfile' element={<SeeProfile></SeeProfile>}></Route>
          <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>

        </Route>
        {/* ////////////////////////////////////////////////////////////////////// */}
        <Route path='reviews' element={<MyReview></MyReview>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
     
      
    </div>
  );
}

export default App;
