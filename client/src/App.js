import React from 'react';
import { Route } from 'react-router';
import LandingPage from './Components/Landing Page/Landing.jsx';


function App() {
  return (
    <div className="App">
      <Route path= '/' exact component={LandingPage}/>
    </div>
  );
}

export default App;
