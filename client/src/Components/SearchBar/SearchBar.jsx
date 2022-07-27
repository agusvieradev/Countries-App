import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {getCountries} from '../../Redux/Actions/Actions.js'
import './Style.css'

const SearchBar = () =>{
    const [name, setName] = useState();
    const [msg, setMsg] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) =>{
        e.preventDefault();
        setName(e.target.value)
        setMsg('')
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (name){
            dispatch(getCountries(name))
            setMsg('')
            setName('')
        }
        else {
            setMsg('Please, write a correct name')
        }
    }

    return (
        <div className = 'container' onSubmit={(e) =>{handleSubmit(e)}}>
            <input 
                type = 'text' 
                id = 'searchInput' 
                placeholder = 'Search..'
                onChange={(e) => {handleInputChange(e)}}
            />
           {<button id = 'submitsearch' type = 'submit'>Search</button>}
           {msg.length > 0 && (
            <div>
                <p>{msg}</p>
            </div>
           )}
        </div>
    )
}

export default SearchBar;