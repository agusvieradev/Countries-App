import React from "react";
import Card from "../Card/Card.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import './Style.css'

const Cards = ({allCountries, currentCountries, currentPage, setCurrentPage, pages}) => {
    return (
        <div>
            <Paginated
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                pages = {pages}
                currentCountries = {currentCountries}
                allCountries = {allCountries.length}
            />
            <div className="cards">
                {allCountries[0]? currentCountries.map((e) => {
                    return(
                        e.msg? <Card key = {1} msg = {e.msg}/> :
                        <Card
                            key = {e.id}
                            id = {e.id}
                            name = {e.name}
                            flag = {e.flag}
                            capital = {e.capital}
                            continent = {e.continent}
                            subregion = {e.subregion}
                            population = {e.population}
                            activities = {e.activities}
                        />
                    );
                }):
                    <div className="loading">
                        <p>Loading...</p>
                        <img src = '' alt = ''/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cards;