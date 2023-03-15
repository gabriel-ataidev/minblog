import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import './index.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
