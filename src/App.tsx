import React,{lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom"

import Loader from './components/Loader';

import './App.css';

//Using lazy loading to import page componentes dynamically when it's needed
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const CreateContact = lazy(() => import('./pages/CreateContact'));
const EditContact = lazy(() => import('./pages/EditContact'));
const MapsAndCharts = lazy(() => import('./pages/MapsAndCharts'));

//App Component with Suspense-fallback UI
const App:React.FC = ()  => {
  return (
    <main className='w-screen h-screen'>
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Contact />}/>
            <Route path='create-contact' element={<CreateContact />}/>
            <Route path='edit-contact' element={<EditContact />}>
              <Route path=':id' element={<EditContact/>}/>
            </Route>
            <Route path='maps-charts' element={<MapsAndCharts />}/>
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
