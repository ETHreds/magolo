const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 


const customFormat = ':method :url :status :response-time[ms] - :res[content-length]';
const logger = morgan(customFormat);

const app = express();

app.use(logger);
app.use(cors());

const teamRouter = require('./routes/team.routes');
const practiceAreaRouter = require('./routes/practiceAreas.routes');
const clientCommsRouter = require('./routes/clientComms.routes');
const attorneyRouter = require('./routes/attorney.routes');
const firmProfileRouter = require('./routes/firmProfile.routes');

app.use('/team', teamRouter)
app.use('/practiceAreas', practiceAreaRouter)
app.use('/clientComms', clientCommsRouter)
app.use('/attorneys', attorneyRouter)
app.use('/', firmProfileRouter)

module.exports = app;
