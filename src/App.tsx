import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponentContainer from './components/Maps/Map';
import Home from './pages/Private/Home';
import Menu from './pages/Private/start/Menu';
import PuntosGenerales from './pages/Private/Puntos/PuntosGenerales';


const App: React.FC = () => {
  return (
    <div >
     
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/maps" element={<MapComponentContainer apiKey='holaa' />} />
            <Route path='/' element={<Home></Home>} />
             <Route path='*' element={<Home></Home>} />
              <Route path='/inicio' element={<Menu></Menu>} />
              <Route path='/mis-puntos' element={<PuntosGenerales></PuntosGenerales>} />
           
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
