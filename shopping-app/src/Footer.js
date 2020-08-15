import React from 'react';

function Footer() {
    return (
        <div style={{ backgroundColor: '#222', height: 150, textAlign: 'center'}}>
            <p style={{ paddingTop: 50, margin: 0 }}>
                <a style={{color: 'white'}} href='#root'>All</a>, <a style={{color: 'white'}} href='#root'>Pending</a>, <a style={{color: 'white'}} href='#root'>Purchased</a>
            </p>
            <p style={{color: 'white', fontFamily: 'Courier New'}}>Created By Amir Debbie.</p>
        </div>
    );
}

export default Footer;
