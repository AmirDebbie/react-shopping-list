import React from 'react';
import cartIcon from './cart-icon.png'

function Header() {
    return (
        <div style={{backgroundColor: '#222', height: 200, textAlign:'center'}}>
            <img style={{height: 100, paddingTop: 40, paddingBottom: 10}} alt='Basket' src={cartIcon} />
            <h1 style={{fontSize: 25, margin: 0, color: 'white', textAlign: 'center'}}>Hello, Basket</h1>
        </div>
    )
    
}

export default Header;