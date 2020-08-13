import React from 'react';

function SearchBar(props) {
    
    return (
        <div>
            <input onChange={(e) => {props.search(e)}} placeholder="Search in List" type="text"></input>
        </div>
    )
}

export default SearchBar;