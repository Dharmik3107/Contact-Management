import React from 'react';
import {Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Contact from './pages/Contact';
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';
import MapsAndCharts from './pages/MapsAndCharts';

import './App.css';

const App:React.FC = ()  => {
  return (
    <main className='w-screen h-screen'>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Contact />}/>
          <Route path='create-contact' element={<CreateContact />}/>
          <Route path='edit-contact' element={<EditContact />}/>
          <Route path='maps-charts' element={<MapsAndCharts />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
