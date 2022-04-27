/* 
 * - ECHO BOT JS -
 *  app.js (MAIN)
 * 
 * Copyright (c) 2022 Interactive Media SpA
 */


// LIBRARIES
const package = require('./package.json');
const port = config.port;
global.config = require('./config');
var express = require("express");
var bodyParser = require('body-parser');
logger.level = process.env.LOG_LEVEL;
var app = express();

// EXPRESS ROUTE
app.use(bodyParser.json());
app.use('/echo-bot/message', require('./controllers/messageHandler'));

// PRINT LOG AT START
app.listen(port, () => {
  console.log(`ECHO BOT v.${package.version} running on port ${port}`);
 });
 
