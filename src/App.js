import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
<<<<<<< HEAD
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'

function App() {

  const foodList = foods.map(element => {
    return <FoodBox key={element.name} food={element} />
    
=======
import FoodBox from "./components/FoodBox.js"

function App() {

  const foodList = foods.map( element => {
    return <FoodBox key={element.name} food={element} />
>>>>>>> 13edab0bd3f1db8f6765b5a9fd21539869d2912c
  })

  return (
    <div className="App">
<<<<<<< HEAD
      <AddFood />
      {foodList}
=======
      { foodList }
>>>>>>> 13edab0bd3f1db8f6765b5a9fd21539869d2912c
    </div>
  );
}

export default App;
