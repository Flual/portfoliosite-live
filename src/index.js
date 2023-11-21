import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './App';
import Home from './Home';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import bg from './img/bg.gif';
import NotFound from './NoPage';



export default function App() {
  return (
    <div className="backgroundimg" >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Aboutme" element={<Aboutme />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path='*' element={<NotFound />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>




    <div className="videocontainer">
      <img src={bg} alt='background' id='bg'></img>
    </div>

    



    </div>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


