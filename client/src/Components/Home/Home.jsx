import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getCountries, getActivities, filterByActivity, filterByContinent, sortedCountries} from '../../Redux/Actions/Actions.js'

export default Home = () => {
    const allCountries = useSelector(state => state.countries)
    const allActivities = useSelector(state => state.activities)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10)
    const [order, setOrder] = useState('');
    const firstCountry = currentPage === 1? 0 : currentPage * 10 - 10;
    const lastCountry = currentPage === 1? 9 : firstCountry + 10;
    const currentCountries = allCountries.slice(firstCountry, lastCountry);

    const pages = (pagesN) => {
        setCurrentPage(pageN);
    };

    useEffect(() => {
        dispatch(getCountries)
    }, [dispatch])

    useEffect(() => {
        dispatch(getActivities)
    }, [dispatch])

    const handleFilterByContinent = (e) => {
        e.preventDefault(),
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1)
    }

    const handleFilterByActivity = (e) => {
        e.preventDefault();
        dispatch(filterByActivity(e.target.value));
        setCurrentPage(1)
    }

    const handleSortedCountries = (e) => {
        e.preventDefault();
        dispatch(sortedCountries(e.target.value));
        setCurrentPage(1);
        setOrder(`${e.target.value}`)
    }

    const handleReset = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className={style.homeCointainer}>
            <NavBar/>
            <div className={style.homeFilter}>
                <Filter
                    allActivities = {allActivities}
                    handleReset = {handleReset}
                    handleFilterByActivity = {handleFilterByActivity}
                    handleFilterByContinent = {handleFilterByContinent}
                    handleSortedCountries = {handleSortedCountries}
                />
            </div>
            <Cards
                allCountries = {allCountries}
                currentCountries = {currentCountries}
                countriesPerPage = {countriesPerPage}
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                pages = {pages}
            />
        </div>
        
    )

}