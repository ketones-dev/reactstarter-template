import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';


const Hats = () => (

<h1>Hats</h1>

);

function App() {
  return (
  
    <div>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/hats' component={Hats} />
    </Switch>
    </div>
    
  );
}

export default App;
