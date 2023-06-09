import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './component/pagess/home/home';
import Resister from './component/pagess/resister/resister';
import Login from './component/pagess/login/login';
import About from './component/pagess/about/about';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>

  <Route path='/' element={<HomePage/>} />
  <Route path='/resister' element={<Resister/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/about' element={<About/>} />
  
</Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
