const { Router } = require('express');
const {getCountries, getCountryById, getCountryByName} = require('../controllers/countries.js')

const router = Router();

router.get('/', async (req, res) => {
    try {
        let name = req.query.name;
        if (name){
            let countryByName = await getCountryByName(name);
            return res.status(200).json(countryByName);
        };
        let countries = await getCountries();
        return res.status(200).json(countries);
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        id = id.toUpperCase()
        let countryById = await getCountryById(id);
        return res.status(200).json(countryById);
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: error.message});
    }
});

module.exports = router