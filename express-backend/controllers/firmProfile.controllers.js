const FirmProfile = require('../models/firmProfile.mongo');

async function createFirmProfile (req, res) {
    try {
      const profileData = {
        "name": "J.O Magolo & Co. Advocates ",
        "tag": "Experience. Prudence. Competence",
        "address": "ELECTRICITY HOUSE,5TH FLOOR,P. O. BOX 935-80100,MOMBASA.",
        "phone": "+254-792-975-456",
        "email": "magolojared@yahoo.com",
        "ceoMessage": "Welcome to J.O Magolo & Co. Advocates. For many years, we have been a pillar of the legal community in Mombasa, Kenya. Our firm is built on the core values of experience, prudence, and competence.We understand that facing a legal challenge can be stressful and overwhelming. That's why we are dedicated to providing our clients with the highest quality legal representation, tailored to their specific needs.Our team of seasoned attorneys possesses a wealth of experience across a wide range of legal matters. We approach each case with prudence, carefully considering all options and strategies to achieve the best possible outcome for our clients.Competence is at the heart of everything we do. We stay up-to-date on the latest legal developments and are committed to providing our clients with the most current and effective legal advice.",
        "associations": [
          {
            "name": "Mombasa Law Society",
            "avatar": "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/358668549_782518763666126_8532137546854631932_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGI7A8JtelARwJIna-xOqqMQYnu9itYduFBie72K1h24SOedGrykZBOaN6XHwNEtvcD9dPmcFytt-tW6FVsdXDp&_nc_ohc=VFfuwiv1RgIAX8PI5cj&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AfCLl3L-QHtc5AufjzYhn2WoonaHA-GweNP-9hZ1pN1t6g&oe=66058B67"
          },
          {
            "name": "Law Society of Kenya",
            "avatar": "https://mls.or.ke/images/2020/08/13/lsknai.png"
          }
        ]
      }
      
      
      const { name } = profileData; 
  
      const updatedProfile = await FirmProfile.findOneAndUpdate(
        { name },
        profileData, 
        { upsert: true, new: true }
      );
  
      if (!updatedProfile) {
        return res.status(400).json({ message: 'Error creating profile' });
      }
  
      res.status(201).json(updatedProfile);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

async function getFirmProfile (req, res) {
  try {
    const firmProfiles = await FirmProfile.findOne();
    res.status(200).json(firmProfiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports  = {
    getFirmProfile,
    createFirmProfile
}