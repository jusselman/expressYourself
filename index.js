const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const server = express();

// Init middlewear //
// app.use(logger);

// Body Parser Middleware //
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// set static folder //
server.use(express.static(path.join(__dirname, 'public')));

// members api routes //
server.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));