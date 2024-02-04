import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponentContainer from './components/Maps/Map';
import Home from './pages/Private/Home';

const App: React.FC = () => {
  return (
    <div >
     
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/maps" element={<MapComponentContainer apiKey='holaa' />} />
            <Route path='/' element={<Home></Home>} />
           
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
