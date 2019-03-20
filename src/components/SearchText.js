import React, { Component } from 'react';


export class SearchText extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount(){
        this.textInput.current.focus();
    }
 
    onSearchChange = (e) => {
        const searchValue = e.target.value;
        this.props.handleSearchField(searchValue);
    }

    onCheckboxInputChange = (e) => {
        const checkbox = e.target.checked;
        this.props.handleCheckboxField(checkbox);
      
    }
    
    render(){
        return(
            <div className = 'search-content'>
                <input type = 'text' placeholder = 'Search Products'
                ref = { this.textInput }
               value = { this.props.filterText } onChange = { this.onSearchChange }/>
                <input type = 'checkbox'  checked = { this.props.inStock }
                onChange = { this.onCheckboxInputChange }/>
                <label> Show Proudcts only in stock </label>
            </div>
        )
    }
}