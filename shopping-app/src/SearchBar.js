import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {   
    return (
        <div>
            <input onChange={(e) => {props.search(e.target.value.toLowerCase())}} placeholder="Search in groceries list" type="text"></input>
        </div>
    )
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
}

export default SearchBar;