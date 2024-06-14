import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Legalcon from './pages/Legalcon';



export default function App() {
    return (

        <div>
            <BrowserRouter>
              <Routes>
                <Route index element= {<Home />} />
                <Route path="/home" element = {<Home />} />
                <Route path="/about" element = {<About />} />
                <Route path="/legalcon" element = {<Legalcon />} />

              </Routes>
            </BrowserRouter>
        </div>
            
        
    );
    
}

