const express = require('express')
// Controllers
const attorneyController = require('../controllers/attorney.controllers');

const attorneyRouter = express.Router()

// Attorney Routes
attorneyRouter.post('/attorneys', attorneyController.createAttorney);
attorneyRouter.get('/attorneys', attorneyController.getAttorneys);
attorneyRouter.get('/attorneys/:id', attorneyController.getAttorney);

module.exports = attorneyRouter