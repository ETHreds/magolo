const express = require('express')

const practiceAreaController = require('../controllers/practiceAreas.controllers');

const practiceAreaRouter = express.Router()


// Practice Area Routes
practiceAreaRouter.post('/practiceAreas', practiceAreaController.createPracticeArea);
practiceAreaRouter.get('/practiceAreas', practiceAreaController.getPracticeAreas);
practiceAreaRouter.get('/practiceAreas/:id', practiceAreaController.getPracticeArea);

module.exports = practiceAreaRouter