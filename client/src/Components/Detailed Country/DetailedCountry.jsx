import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCountry, cleanDataCountry } from './../../Redux/Actions/Actions';
import { Link } from "react-router-dom";

const DataCountry = (props) => {
    const dispatch = useDispatch();
    const countryData = useSelector(state => state.countryData)
    
    useEffect(() => {
        dispatch(getDataCountry(props.match.params.id))
        return () => dispatch(cleanDataCountry());
    }, [dispatch]);

    return (
        <div>
            <div className = 'data'>
                <div>
                    <Link to = '/home'>
                        <button> Home </button>
                    </Link>
                </div>
                <div className = 'countryName'>
                    <h1>{countryData.name}</h1>
                </div>
                <div className = 'countryData'>
                    <h3>ID: {countryData.id}</h3>
                    <h3>Capital: {countryData.capital}</h3>
                    <h3>Continent: {countryData.continent}</h3>
                    <h3>Area: {countryData.area} km2</h3>
                    <h3>Population: {countryData.population} people</h3>
                    <h3>Activities: </h3>
                    <ul>
                        {countryData.activities?.map(e => {
                            return <li className='activityDetail' key = {e.id}>
                                Name: {e.name} 
                                <br /> 
                                Difficulty: {e.difficulty} stars
                                <br /> 
                                Duration: {e.duration} minutes 
                                <br /> 
                                Season: {e.season}
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <img src = {countryData.flag} alt  = 'img not found'/>
                </div>
            </div>
        </div>
    )
}

export default DataCountry