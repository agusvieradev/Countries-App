import React from "react";

const Paginated = ({currentPage, allCountries, currentCountries, setCurrentPage, pages}) => {
    const pageN = []
    let maxPages = Math.ceil( allCountries / 10)
    for (let i = 0; i < maxPages; i++) {
        pageN.push(i + 1)
    }
    console.log(pageN)
    return (
        <div className = "container">
            <ul className = "pages">
                <button onClick = {() => setCurrentPage(currentPage === 1? currentPage : currentPage - 1)}>{'<'}</button>
                {pageN.map((number) => (
                    <button
                        className = {`${number}`}
                        key = {number}
                        onClick = {() => pages(number)}
                    >{number}</button>
                ))}
                <button onClick={() => setCurrentPage(currentPage === maxPages? currentPage : currentPage + 1)}>{'>'}</button>
            </ul>
        </div>
    )

}

export default Paginated