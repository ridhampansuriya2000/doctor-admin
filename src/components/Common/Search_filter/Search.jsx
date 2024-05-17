import React from 'react';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';

const Search = ({ options, value, multiple, disabled }) => {
    return (
        <SelectSearch
            options={options}
            value={value}
            multiple={multiple}
            disabled={disabled}
            search="menu" 
            placeholder="Choose an option"
        />
    );
}

export default Search;
