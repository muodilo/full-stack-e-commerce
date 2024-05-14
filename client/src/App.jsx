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
      </Routes>
      <Footer/>
      <ToastContainer/>
    </Router>
  )
}

export default App
