const { Country, Activity } = require("../db");

module.exports= {
    createActivity: async (name, difficulty, duration, season, countries) => {
        let createActivity = await Activity.findOrCreate({
            where: { name: name },
            defaults: { name, difficulty, duration, season },
        });
        let activitycountry = await Country.findAll({ where: { name: countries } });
        activitycountry.map(async (country) => {
            await country.addActivity(createActivity[0].id);
        });
        }
}