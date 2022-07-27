import React from 'react';
import { Route } from 'react-router';
import LandingPage from './Components/Landing Page/Landing.jsx';
import Home from './Components/Home/Home.jsx';


function App() {
  return (
    <div className="App">
      <Route path = '/' exact component={LandingPage}/>
      <Route path = '/home' component={Home}/>
    </div>
  );
}

export default App;
