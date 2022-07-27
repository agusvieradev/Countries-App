const { Country, Activity } = require("../db");

module.exports= {
    createActivity: async (name, difficulty, duration, season, countries) => {
        let createActivity = await Activity.findOrCreate({
            where: { name: name },
            defaults: { name, difficulty, duration, season },
        });
        let activitycoutry = await Country.findAll({ where: { id: countries } });
        activitycoutry.map(async (country) => {
            await country.addActivity(createActivity[0].id);
        });
        }
}