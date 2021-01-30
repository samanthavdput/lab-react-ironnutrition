import React, { Component } from 'react'

 class AddFood extends Component {

    constructor(props){
        super(props);
        this.state = {
            showForm: false,
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

    handleFormSubmission = (event) => {
        event.preventDefault()
        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
        })
        this.setState({
            showForm: false,
            name: '',
            calories: 0,
            image: ''
        });
    }

    displayForm = () => {
        const newShowForm = ! this.state.showForm;
        this.setState({
            showForm: newShowForm
        });
    }

    render() {
        const formStyle = {
            display: this.state.showForm ? "block" : "none"
        }
        return (
            <div>
                <button onClick={this.displayForm}>
                    { this.state.showForm ? "Hide form" : "Display form" }
                </button>
                <form onSubmit={this.handleFormSubmission} style={formStyle}>
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