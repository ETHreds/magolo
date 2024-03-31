const PracticeArea = require('../models/practiceArea.mongo'); // Adjust path based on your model location

async function createPracticeArea (req, res) {
  try {
    const newPracticeArea = new PracticeArea(req.body);
    const savedPracticeArea = await newPracticeArea.save();
    res.status(201).json(savedPracticeArea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
async function getPracticeArea (req, res) {
    try {
      const practiceAreaId = req.params.id;
      const practiceArea = await PracticeArea.findById(practiceAreaId);
      if (!practiceArea) return res.status(404).json({ message: 'Practice area not found' });
      res.status(200).json(practiceArea);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

async function getPracticeAreas (req, res) {
    try {
      const practiceAreas = await PracticeArea.find();
      res.status(200).json(practiceAreas);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
    createPracticeArea,
    getPracticeArea,
    getPracticeAreas
}