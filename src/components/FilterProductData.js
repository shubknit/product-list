import React, { Component } from 'react';
import { ProductData } from '../mockData/ProductData';
import { ProductTable } from './ProductTable';
import { SearchText } from './SearchText';

export class FilterProductData extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStock: false,
        }
    }

    handleSearchField = (value) => {
        this.setState({
            filterText: value
        })
    }

    handleCheckboxField = (value) => {
        this.setState({
            inStock: value
        })
    }

    render() {
        const inStock = this.state.inStock;
        return (
            <div className = 'main-content'>
                <SearchText handleSearchField = { this.handleSearchField }
                handleCheckboxField = { this.handleCheckboxField }
                inStock = { this.state.inStock} filterText = { this.state.filterText } />
                <ProductTable productData = { ProductData } 
                inStock = { this.state.inStock} filterText = { this.state.filterText }/>
            </div>
        )
    }
}