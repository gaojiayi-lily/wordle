import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Main from './component/Main';
import About from './component/About';
import Easy from './component/easy/Easy';
import Medium from './component/medium/Medium';
import Hard from './component/hard/Hard';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/intro" element={<About />}/>
          <Route path="/easy" element={<Easy />}/>
          <Route path="/medium" element={<Medium />}/>
          <Route path="/hard" element={<Hard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

