import './App.css'
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import MapComponentContainer from './components/Maps/Map';




const App: React.FC = () => {

 
  return (
    <div className="App">
      <h1>Plantar Huautli</h1>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          
            <Route path="/maps" element={<MapComponentContainer apiKey='holaa' ></MapComponentContainer>} />
            
    
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
