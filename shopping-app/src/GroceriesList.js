import React from 'react';

function GroceriesList(props) {
    return (
        <div>
            <h2>Groceries</h2>
            <ul>
                {props.list.filter((item) => {
                    return item.show;
                }).map((item, i) => {
                    return <li className='add' key={i} onClick={() => props.addAmount(item.name)}>{item.name}</li>
                })}
            </ul>
        </div>
    )
    
}

export default GroceriesList;