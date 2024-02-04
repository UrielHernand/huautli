import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponentContainer from './components/Maps/Map';

const App: React.FC = () => {
  return (
    <div className="App">
     
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/maps" element={<MapComponentContainer apiKey='holaa' />} />
           
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
