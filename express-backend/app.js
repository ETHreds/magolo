const path = require('path')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 

const logger = morgan('combined');

const app = express();

app.use(logger);
app.use(cors());
app.use(express.static(path.join(__dirname,'public')))

const teamRouter = require('./routes/team.routes');
const practiceAreaRouter = require('./routes/practiceAreas.routes');
const clientCommsRouter = require('./routes/clientComms.routes');
const attorneyRouter = require('./routes/attorney.routes');
const firmProfileRouter = require('./routes/firmProfile.routes');

app.use('/team', teamRouter)
app.use('/practiceAreas', practiceAreaRouter)
app.use('/clientComms', clientCommsRouter)
app.use('/attorneys', attorneyRouter)
app.use('/firmProfile', firmProfileRouter)
app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app;
