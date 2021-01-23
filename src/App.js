import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'

function App() {

  const foodList = foods.map(element => {
    return <FoodBox key={element.name} food={element} />
    
  })

  return (
    <div className="App">
      <h1>test</h1>
      <AddFood />
      {foodList}
    </div>
  );
}

export default App;
