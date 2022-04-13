import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Peliculas from '../pages/Peliculas';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Peliculas/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App