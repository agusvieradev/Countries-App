import React from "react";
import { Link } from "react-router-dom";

const Filter = ({allActivities, handleReset, handleFilterByActivity, handleFilterByContinent, handleSortedCountries}) => {
    return (
        <div className = "Container">
            <h3>FILTERS</h3>
            <div className ="filters">
                <label>By Continent</label>
                <select onChange={(e) => handleFilterByContinent(e)}>
                    <option value = 'All'>All</option>
                    <option value = 'Africa'>Africa</option>
                    <option value = 'Asia'>Asia</option>
                    <option value = 'Europe'>Europe</option>
                    <option value = 'South America'>South America</option>
                    <option value = 'North America'>North America</option>
                    <option value = 'Oceania'>Oceania</option>
                    <option value = 'Antartica'>Antartica</option>
                </select>
                <label>By Activity</label>
                <select onChange={(e) => handleFilterByActivity(e)}>
                    <option value = 'All'>All</option>
                    {allActivities?.map((e) => {
                        return <option key = {e.id} value = {e.name}>{e.name}</option>
                    })}
                </select>
                <h3>ORDER BY</h3>
                <select onChange={(e) => handleSortedCountries(e)}>
                    <option value = 'None'>None</option>
                    <option value = 'ABC'>By name from A to Z</option>
                    <option value = 'ZYX'>By name from Z to A</option>
                    <option value = 'asc'>By population from min to max</option>
                    <option value = 'desc'>By population from max to min</option>
                </select>
            </div>
            <button onClick={(e) => handleReset(e)}>Reset</button>
            <hr/>
            <Link to = 'activities/create'>
                <button>Create Activity</button>
            </Link>
        </div>
       
    )
}

export default Filter