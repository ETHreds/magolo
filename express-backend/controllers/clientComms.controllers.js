const ClientComms = require('../models/clientComms.mongo');

async function saveClientComms (req, res){
  try {
    const newClientComms = new ClientComms(req.body);
    const savedComms = await newClientComms.save();
    res.status(201).json(savedComms);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


async function getClientComms (req, res){
    try {
      const clientComms = await ClientComms.find();
      res.status(200).json(clientComms);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

async function getClientComm (req, res){
    try {
      const searchParam = req.query;
      const clientComm = await ClientComms.findOne({
        $or: [
          { name: searchParam.name },
          { email: searchParam.email },
          { phoneNumber: searchParam.phoneNumber },
        ],
      });
      if (!clientComm) return res.status(404).json({ message: 'Communication not found' });
      res.status(200).json(clientComm);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
    saveClientComms,
    getClientComm,
    getClientComms
}
  