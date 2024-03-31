const express = require('express')

const teamController = require('../controllers/team.controller')

const teamRouter =  express.Router()

// Team Member Routes
teamRouter.post('/', teamController.createTeamMember);
teamRouter.get('/', teamController.getTeamMembers);
teamRouter.get('/:id', teamController.getTeamMember);

module.exports = teamRouter;
