const { Router } = require('express');
const countries = require('./CountriesRoutes.js')
const activities = require('./ActivitiesRoutes.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries);
router.use("/activities", activities);


module.exports = router;
