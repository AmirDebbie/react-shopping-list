import React from 'react';

function Footer() {
    return (
        <div style={{ backgroundColor: '#333', height: 150, }}>
            <p style={{ textAlign: 'center', paddingTop: 50, margin: 0 }}>
                <a style={{color: 'white'}} href='#root'>ALL</a>, <a style={{color: 'white'}} href='#root'>PENDING</a>, <a style={{color: 'white'}} href='#root'>PURCHASED</a>
                </p>
        </div>
    );
}

export default Footer;
