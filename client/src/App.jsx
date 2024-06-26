import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Navbar from './components/navBar/Navbar';
import SwapTheme from './components/SwapTheme/SwapTheme';
import Footer from './components/Footer/Footer';
import MenPage from './pages/menPage/MenPage';
import Signup from './pages/signUp/Signup';
import Login from './pages/Login/Login';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/order/PlaceOrder';
import Dashboard from './pages/dashboard/Dashboard';
import ProductDetails from './pages/productDetails/ProductDetails';
import WomenPage from './pages/womenPage/WomenPage';
import KidsPage from './pages/KidsPage/KidsPage';
import Whatsapp from './components/whatsapp/Whatsapp';
import Contact from './pages/contact/Contact';


function App() {


  return (
    <Router>
      <Navbar />
      <SwapTheme/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/men' element={<MenPage/> } />
        <Route path='/sign-up' element={<Signup/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/cart' element={<Cart/> } />
        <Route path='/checkout' element={<PlaceOrder/> } />
        <Route path='/dashboard' element={<Dashboard/> } />
        <Route path='/products/:id' element={<ProductDetails/> } />
        <Route path='/women' element={<WomenPage/> } />
        <Route path='/kids' element={<KidsPage/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
      <Footer/>
      <ToastContainer />
      <Whatsapp/>
    </Router>
  )
}

export default App
