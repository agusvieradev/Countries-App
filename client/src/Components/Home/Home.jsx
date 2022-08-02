import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getCountries, getActivities, filterByActivity, filterByContinent, sortByName, sortByPopulation} from '../../Redux/Actions/Actions.js'
import style from './Style.css'
import Cards from '../Cards/Cards.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import Filter from '../Filter/Filter.jsx'

const Home = () => {
    const allCountries = useSelector(state => state.countries)
    const allActivities = useSelector(state => state.activities)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('');
    const firstCountry = currentPage === 1? 0 : currentPage * 10 - 10;
    const lastCountry = currentPage === 1? 9 : firstCountry + 10;
    const currentCountries = allCountries.slice(firstCountry, lastCountry);

    const pages = (pageN) => {
        setCurrentPage(pageN);
    };

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const handleFilterByContinent = (e) => {
        e.preventDefault();
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1)
    
    }

    const handleFilterByActivity = (e) => {
        e.preventDefault();
        dispatch(filterByActivity(e.target.value));
        setCurrentPage(1);
    }

    const handleSortByname = (e) => {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setOrder(`${e.target.value}`);
    }

    const handleSortByPopulation = (e) => {
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value));
        setOrder(`${e.target.value}`);
    }

    const handleReset = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className = 'homeContainer'>
            <NavBar/>
            <div className = 'filter'>
                <Filter
                    allActivities = {allActivities}
                    handleReset = {handleReset}
                    handleFilterByActivity = {handleFilterByActivity}
                    handleFilterByContinent = {handleFilterByContinent}
                    handleSortByname = {handleSortByname}
                    handleSortByPopulation = {handleSortByPopulation}
                />
            </div>
            <Cards
                allCountries = {allCountries}
                currentCountries = {currentCountries}
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                pages = {pages}
            />
        </div>
        
    )
};

export default Home