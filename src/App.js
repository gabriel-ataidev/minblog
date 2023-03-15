import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
