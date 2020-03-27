const express = require('express')
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')

const routes = express.Router()

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index);

module.exports = routes; 