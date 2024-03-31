const express = require('express')

const firmProfileController = require('../controllers/firmProfile.controllers');

const firmProfileRouter = express.Router()


// Firm Profile Routes
firmProfileRouter.post('/', firmProfileController.createFirmProfile);
firmProfileRouter.get('/', firmProfileController.getFirmProfile);

module.exports = firmProfileRouter
