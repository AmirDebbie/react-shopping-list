import React from 'react';
import PropTypes from 'prop-types';

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

GroceriesList.propTypes = {
    addAmount: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
}

export default GroceriesList;