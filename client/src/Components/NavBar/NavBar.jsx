import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const refreshPage = () =>{
        window.location.reload();
    }
    return(
        <div className='nav'>
            <Link to = '/home' onClick={refreshPage}>
                <p className='nameApp'>Countries App</p>
            </Link>
            <SearchBar/>
        </div>
    );
};

export default NavBar

