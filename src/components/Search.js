import React, { useState, useEffect } from 'react';

const Search = ({ onSearchCountry }) => {

    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        onSearchCountry(searchText);
    }, [searchText]);

    return (
        <div className='text-center'>
            <input type="search" className='form-control' placeholder="Search Country..." onChange={handleChange} />
        </div>
    );
}

export default Search;