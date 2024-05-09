import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Navbar from './components/navBar/Navbar';



function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> } />
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App
