import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'

function App() {
  return (
    <div className="App">
      <FoodBox food={foods[0]} />
    </div>
  );
}

export default App;
