import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
    }


    doSomething = (event) => {
        const value = event.target.value;
        this.setState({
            searchInput: value
        });
        this.props.filterFood(value);

    }

    render() {
        return(
            <div>
            <label>
                Search:
                <input type="text" name="search" value={this.state.searchInput} onChange={this.doSomething} />
            </label>
            </div>
        )
    }
}

export default SearchBar;