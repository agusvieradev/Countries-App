import React from 'react';  
import './Style.css'

const Card = (props) => {
    const { id, name, flag, continent } = props;
    return (
        <>
            {props.msg} ?
            (<p>{props.msg}</p>)
            :
            (
                <div className='Card'>
                    <div className='name'>
                        <link to = {`/countries/data/${id}`}>
                            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                        </link>
                    </div>
                    <div className='flag'>
                        <img className='flagIMG' src = {flag} alt = 'Flag Not Found'/>
                    </div>
                    <h3>{`${continent}`}</h3>
                </div>
            )
        </>
    )
}

export default Card 