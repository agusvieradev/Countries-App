import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {getCountry} from '../../Redux/Actions/Actions.js'
import './Style.css'

const SearchBar = () =>{
    const [name, setName] = useState('');
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
            dispatch(getCountry(name))
        }
        else {
            setMsg('Please, write a name')
        }
    }

    return (
        <form className = 'container' onSubmit={(e) => {handleSubmit(e)}}>
            <input 
                type = 'text' 
                placeholder = 'Search...'
                value = {name}
                onChange = {(e) =>{handleInputChange(e)}}
            />
           {<button id = 'submitsearch' type = 'submit' >Search</button>}
           {msg.length > 0 && (
            <div>
                <p>{msg}</p>
            </div>
           )}
        </form>
    )
}

export default SearchBar;