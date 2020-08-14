import React from 'react';

function SearchBar(props) {
    
    return (
        <div>
            <input onChange={(e) => {props.search(e.target.value.toLowerCase())}} placeholder="Search in groceries list" type="text"></input>
        </div>
    )
}

export default SearchBar;