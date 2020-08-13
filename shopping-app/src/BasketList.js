import React from 'react';

function BasketList(props) {
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
            <h2>Basket <button className='dlt-btn' style={{marginLeft: 50}} onClick={() => {props.deleteAll()}}>Delete All</button></h2>
            {isBasketEmpty() ? 
            <p>Your basket is empty!</p> :
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

export default BasketList;