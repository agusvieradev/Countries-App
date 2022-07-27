const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");
const activities = require("./activities.js");

let models = {
    countriesInDB: async () => {
        const api = await axios.get('https://restcountries.com/v3/all');
        const apiData = api.data;
        let capitalCity = 'hasnt capital city';
        const countriesDB = apiData.map(country => {
            if (country.capital) capitalCity = country.capital[0]
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[0],
                continent: country.continents[0],
                capital: capitalCity,
                subregion: country.subregion,
                area: country.area,
                population: country.population
            }
        })
        for (let i = 0; i < countriesDB.length; i++) {
            const countries = await Country.create(countriesDB[i]);           
        }
    },

    bringCountriesDB: async () => {
        const dbCountries = await Country.findAll({include:Activity});
        const countries = dbCountries.map( country => {
            return {
                id: country.id,
                name: country.name,
                flag: country.flag,
                capital: country.capital,
                continent: country.continent,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                activities: country.activities.map(activity => {
                    return{
                        name: activity.name,
                        difficulty: activity.difficulty,
                        duration: activity.duration,
                        season: activity.season
                    }
                })
            }
        });
        return countries;
    },
}

module.exports = {
    getCountries: async () => {
        const areCountriesInDB = await models.countriesInDB();
        const bringCountries = await models.bringCountriesDB();
        return bringCountries;

    },
    getCountryById: async (id) => {
        try {
            const countryId = await Country.findByPk(id, {include: Activity}) 
            console.log('id', countryId)
            return countryId
        } 
        catch (error) {
            throw new Error('Not Country Found');
        } 
    },
    getCountryByName: async (name) => {
        try {
            const param = name.toLowerCase();
            const countryByName = await Country.findAll({
                where: {name: {[Op.iLike]: `%${param}%`}},
                include: Activity
            })
        console.log('name', countryByName)
            return countryByName
        } catch (error) {
            throw new Error('Not Country Found');
        }
    },
}