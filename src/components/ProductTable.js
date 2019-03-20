import React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

export const ProductTable = (props) => {
    let rows = [];
    let lastCategory = null;
    const message = 'No Products found';
    const productData = props.productData;
    const filterTextLowerCase = props.filterText.toLowerCase();
    const filterData = productData.filter(item => {
        const filterDataFlag =  item.name.toLowerCase().includes(filterTextLowerCase);
        let inStockFlag = !props.inStock ?  true : item.stocked;
        return filterDataFlag && inStockFlag;
    });    


    filterData.map((product, index) => {
        const { category } = product;
        if(product.category !== lastCategory){
            rows.push(<ProductCategoryRow key = { category } categoryName = { category }/>)
        }
      
        rows.push(<ProductRow  key = { index } productRowData = { product }/>)
    
        lastCategory = category;

    })
    if(!filterData.length){
        rows.push(<ProductRow key = {1}  message = { message }/>)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Price    </th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>    
        </table>    
    )
}