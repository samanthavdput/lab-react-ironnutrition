import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'

class App extends React.Component {
  state = {
    foods
  }

  handleAddFood = (newFood) => {
    const newFoods = [newFood, ...this.state.foods]
    console.log('help')
    this.setState({foods: newFoods})
  }

  render() {
    const foodList = this.state.foods.map(element => {
      return <FoodBox key={element.name} food={element} />

    })
    return (
      <div className="App">
        <h1>test</h1>
        <AddFood addFood={this.handleAddFood} />
        {foodList}
      </div>
    );
  }
}

export default App;
