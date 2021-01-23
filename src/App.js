import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    foods: foods,
    displayedFoods: [...foods]
  }

  handleAddFood = (newFood) => {
    const newFoods = [newFood, ...this.state.foods]
    this.setState({
      foods: newFoods,
      displayedFoods: newFoods
    })
  }

  handleFoodSearch = (searchString) => {
    const newFoods = this.state.foods.filter(food => (food.name.toUpperCase().includes(searchString.toUpperCase())))
    this.setState({
      displayedFoods: newFoods
    })
  }

  render() {
    const foodList = this.state.displayedFoods.map(element => {
      return <FoodBox key={element.name} food={element} />

    })
    return (
      <div className="App">

      <SearchBar filterFood={this.handleFoodSearch} />

      {foodList}

        <AddFood addFood={this.handleAddFood} />

      </div>
    );
  }
}

export default App;
