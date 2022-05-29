import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    //const [searchValue, setSearchValue] = React.useState(''); //React Hooks

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return[
        <input className='TodoSearch' 
        placeholder="onion"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    ];
}

export { TodoSearch };