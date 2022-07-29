import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCountry, cleanDataCountry } from './../../Redux/Actions/Actions';
import { Link } from "react-router-dom";


const DataCountry = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDataCountry(props.match.params.id));
        return () => dispatch(cleanDataCountry());
    }, []);

    const countryData = useSelector(state => state.countryData)
    console.log(countryData)

    return (
        <div>
            <div className = "data">
                <div>
                    <Link to = '/home'>
                        <button> Home </button>
                    </Link>
                </div>
                <div className="countryName">
                    <h1>{countryData.name.charAt(0).toUpperCase() + countryData.name.slice(1)}</h1>
                </div>
                <div className="CountryData">
                    <h3>ID: {countryData.id}</h3>
                    <h3>Capital: {countryData.capital}</h3>
                    <h3>Continent: {countryData.continent}</h3>
                    <h3>Area: {countryData.area} km2</h3>
                    <h3>Population: {countryData.population} M.</h3>
                    <h3>Activities: {countryData.activities.map(e => {
                        return <ul>
                            <li>Name: {e.name}</li>
                            <h5>Difficlty: {e.difficulty} stars</h5>
                            <h5>Duration: {e.duration} Minutes</h5>
                            <h5>Seasons: {e.season}</h5>
                        </ul>
                        })}</h3>
                </div>
                <div>
                    <img src = {countryData.flag} alt  = 'img not found'/>
                </div>
            </div>
        </div>
    )
}

export default DataCountry