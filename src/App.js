import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox.js"

function App() {

  const foodList = foods.map( element => {
    return <FoodBox key={element.name} food={element} />
  })

  return (
    <div className="App">
      { foodList }
    </div>
  );
}

export default App;
