import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'

function App() {
  return (
    <div className="App">
      { foods.map( item => <FoodBox food={item} /> ) }
    </div>
  );
}

export default App;
