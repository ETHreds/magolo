const people = require("../models/team.models")
const Team = require('../models/team.mongo')

async function createTeamMember (req, res) {
  try {
    const newTeamMember = new Team(req.body);
    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

async function getTeamMember (req, res) {
    try {
      const teamMemberId = req.params.id;
      const teamMember = await Team.findById(teamMemberId);
      if (!teamMember) return res.status(404).json({ message: 'Team member not found' });
      res.status(200).json(teamMember);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

async function getTeamMembers (req, res) {
    try {
      const teamMembers = await Team.find();
      res.status(200).json(teamMembers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};


  

function getTeam(req, res){
    res.json(people)
}

function getPerson(req, res){
    const personId = +req.params.personId
    const person = people[personId]

    if(person){
        res.json(person)
    }else {
        res.status(404).json({
            error: "Mans don't exist...Probably fired or worse, DEAD!!. If dead, no connection with his work here...probably ;-)"
        })
    }
}


module.exports = {
    getTeam,
    getPerson,
    createTeamMember,
    getTeamMember,
    getTeamMembers
}