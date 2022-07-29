import React from "react";
import { Link } from "react-router-dom";

const Filter = ({allActivities, handleReset, handleFilterByActivity, handleFilterByContinent, handleSortByPopulation, handleSortByname}) => {
    return (
        <div className = "Container">
            <h3>FILTERS</h3>
            <div className ="filters">
                <label>By Continent</label>
                <select onChange={(e) => handleFilterByContinent(e)}>
                    <option value = 'all'>All</option>
                    <option value = 'Africa'>Africa</option>
                    <option value = 'Asia'>Asia</option>
                    <option value = 'Europe'>Europe</option>
                    <option value = 'South America'>South America</option>
                    <option value = 'North America'>North America</option>
                    <option value = 'Oceania'>Oceania</option>
                    <option value = 'Antarctica'>Antarctica</option>
                </select>
                <label>By Activity</label>
                <select onChange={(e) => handleFilterByActivity(e)}>
                    <option value = 'all'>All</option>
                    {allActivities?.map((e) => {
                        return <option key = {e.id} value = {e.name}>{e.name}</option>
                    })}
                </select>
                <h3>ORDER BY NAME</h3>
                <select onChange={(e) => handleSortByname(e)}>
                    <option value = 'None'>None</option>
                    <option value = 'ABC'>By name from A to Z</option>
                    <option value = 'ZYX'>By name from Z to A</option>  
                </select>
                <h3>ORDER BY POPULATION</h3>
                <select onChange={(e) => handleSortByPopulation(e)}>
                    <option value = 'None'>None</option>
                    <option value = 'asc'>By max to min population</option>
                    <option value = 'desc'>By min to max population</option>  
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