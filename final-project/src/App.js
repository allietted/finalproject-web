import React from 'react';
import Navmain from './Navmain'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { FamilyListing } from './Scenes/FamilyListing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import FamilyListing from "./Scenes/FamilyListing"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navmain />
        <Routes>
          <Route path="/familyevents" element={<FamilyListing />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


//https://final-top5-ad.web.app