import React from 'react';

export const ProductCategoryRow = (props) => {
    const rowCategoryName = props.categoryName;
    return(
       <tr>
            <th colSpan = '2'>
                { rowCategoryName } 
            </th> 
       </tr>     
    )

}