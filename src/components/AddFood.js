import React, { Component } from 'react'

 class AddFood extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            calories: 0,
            image: ''
        }
    }

    handleChange = (event) => {

        const propertyName = event.target.name

        this.setState({
            [propertyName]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} ></input>

                    <label>Calories:</label>
                        <input type='text' name='calories' value={this.state.calories} onChange={this.handleChange}></input>

                    <label>Image:</label>
                        <input type='text' name='image' value={this.state.image} onChange={this.handleChange}></input>

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddFood