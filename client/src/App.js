import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
      <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Signup/>} />
             <Route path="/home" element={<Home/>} />
             <Route path="/login" element={<Login/>}/>
           
           </Routes>
         </BrowserRouter>
      </>
  );
}

export default App;
