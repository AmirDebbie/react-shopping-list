import React from 'react';

function Footer() {
    return (
        <div style={{ backgroundColor: '#333', height: 150, }}>
            <p style={{ textAlign: 'center', paddingTop: 50, margin: 0 }}>
                <a style={{color: 'white'}} href='#root'>All</a>, <a style={{color: 'white'}} href='#root'>Pending</a>, <a style={{color: 'white'}} href='#root'>Purchased</a>
                </p>
        </div>
    );
}

export default Footer;
