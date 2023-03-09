import React from 'react';
import Navmain from './Navmain'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import FamilyListing from "./Scenes/FamilyListing"
import DayPartyListing from './Scenes/DayPartyListing';
import LadiesListing from './Scenes/LadiesListing'
import AddEvents from './Admin/AddEvents';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navmain/>
        <Routes>
          <Route path="/admin" element={<AddEvents/>}/>
          <Route path="/ladiesnight" element={<LadiesListing/>} />  
          <Route path="/dayparty" element={<DayPartyListing/>} />     
          <Route path="/familyevents" element={<FamilyListing/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


//https://final-top5-ad.web.app