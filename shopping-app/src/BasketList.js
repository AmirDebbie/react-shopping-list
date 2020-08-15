import React from 'react';
import PropTypes from 'prop-types';

function BasketList(props) {

    // Checks if any item in the itemList had an amount above 0.
    const isBasketEmpty = () => {
        let result = true;
        props.list.forEach(item => {
            if(item.amount > 0) {
                result = false;
            }
        });
        return result;
    }
    
    return (
        <div>
            <h2>Basket <button className='dlt-btn'  onClick={() => {props.deleteAll()}}>Delete All</button></h2>
            {isBasketEmpty() ? 
            <h3>Your basket is empty!</h3> :
            <ul>
                {props.list.filter(item => {
                    return item.amount > 0;
                }).map((item, i) => {
                    if (item.isChecked) {
                        return <li className='add' key={i} style={{textDecoration: "line-through"}} onClick={() => {props.changeChecked(item.name)}}>{item.name} {item.amount}</li>
                    } else {
                        return <li className='remove' key={i} onClick={() => {props.changeChecked(item.name)}}>{item.name} {item.amount}</li>
                    }
                })}
            </ul>
            }
        </div>
    ) 
}

BasketList.propTypes = {
    changeChecked: PropTypes.func.isRequired,
    deleteAll: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
}

export default BasketList;