import React from 'react';
import { Route } from 'react-router';
import LandingPage from './Components/Landing Page/Landing.jsx';
import Home from './Components/Home/Home.jsx';
import DataCountry from './Components/Detailed Country/DetailedCountry.jsx';
import FormActivity from './Components/Form Acitivity/FormActivity.jsx';


function App() {
  return (
    <div className="App">
      <Route path = '/' exact component={LandingPage}/>
      <Route path = '/home' component={Home}/>
      <Route path = '/country/data/:id' component={DataCountry}/>
      <Route path = '/createActivity' component={FormActivity}/>
    </div>
  );
}

export default App;
