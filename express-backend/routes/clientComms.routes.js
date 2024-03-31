const express = require('express')

const clientCommsController = require('../controllers/clientComms.controllers');

const clientCommsRouter = express.Router()


// Client Communication Routes
clientCommsRouter.post('/', clientCommsController.saveClientComms);
clientCommsRouter.get('/', clientCommsController.getClientComms);
clientCommsRouter.get('/search', clientCommsController.getClientComm);

module.exports = clientCommsRouter