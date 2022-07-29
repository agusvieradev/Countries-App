import React from 'react';  
import { Link } from 'react-router-dom';
import './Style.css'

const Card = (props) => {
    const { id, name, flag, continent } = props;
    return (
        <>
            <div className='Card'>
                <div className='name'>
                    <Link to = {`/country/data/${id}`}>
                        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    </Link>
                </div>
                <div className='flag'>
                    <img className='flagIMG' src = {flag} alt = 'Flag Not Found'/>
                </div>
                <h3>{continent}</h3>
            </div>
        </>
    )
}

export default Card 