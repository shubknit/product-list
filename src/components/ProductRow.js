import React from 'react';

export const ProductRow = (props) => {
    const { price, name, stocked } = !props.message ? props.productRowData : '';
    const message = props.message;
    const rowStyle = {
        color: 'red'
    }
    return(
        <tr>
            <td>  {  stocked ? name : <span style = { rowStyle }> { name } </span> } </td>
            <td>  { price } </td>
            <td>  { message } </td>
        </tr>   
           
    )

}