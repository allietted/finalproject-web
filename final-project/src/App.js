import React from 'react';
import Navmain from './Navmain'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FamilyListing } from './Scenes/FamilyListing';

function App() {
  return (
    <>

      <Navmain />
      <FamilyListing />

    </>
  );
}

export default App;
