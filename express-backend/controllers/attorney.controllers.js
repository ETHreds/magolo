const Attorney = require('../models/attorney.mongo'); // Adjust path based on your model location

async function createAttorney(req, res) {
    try {
      const attorneyData = req.body;
      const { name } = attorneyData;
  
      const updatedAttorney = await Attorney.findOneAndUpdate(
        { name },
        attorneyData, 
        { upsert: true, new: true }
      );
  
      if (!updatedAttorney) {
        return res.status(400).json({ message: 'Error creating attorney' });
      }
  
      res.status(201).json(updatedAttorney);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
async function getAttorneys (req, res) {
    try {
      const attorneys = await Attorney.find();
      res.status(200).json(attorneys);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


async function getAttorney (req, res) {
    try {
      const attorneyId = req.params.id;
      const attorney = await Attorney.findById(attorneyId);
      if (!attorney) return res.status(404).json({ message: 'Attorney not found' });
      res.status(200).json(attorney);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
module.exports = {
   createAttorney,
   getAttorneys,
   getAttorney

}
