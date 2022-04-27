/* 
 * - ECHO BOT JS -
 *  app.js (MAIN)
 * 
 * Copyright (c) 2022 Interactive Media SpA
 */


// LIBRARIES
const package = require('../package.json');
global.config = require('./config');
const port = config.bot.port;
var express = require("express");
var bodyParser = require('body-parser');
var app = express();

// EXPRESS ROUTE
app.use(bodyParser.json());
app.use('/echo-bot/message', require('./controllers/messageHandler'));

// PRINT LOG AT START
app.listen(port, () => {
  console.log(`ECHO BOT v.${package.version} running on port ${port}`);
 });
 
