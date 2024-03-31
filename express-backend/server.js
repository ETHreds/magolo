const http = require('http');
const app = require('./app');
const mongoose = require('mongoose')
require('dotenv').config();


const port = process.env.PORT || 3000;

const server = http.createServer(app);
async function startServer(){
	const uri = process.env.MONGO_URI;

	mongoose.connect(uri)
	  .then(() => console.log('Connected to MongoDB Atlas'))
	  .catch(error => console.error('Error connecting to MongoDB Atlas:', error));


	server.listen(port, () => {
	  console.log(`Server listening on ${port}`);
	});
}
startServer();
