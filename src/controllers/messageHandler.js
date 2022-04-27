/* 
 * - ECHO BOT -
 * messageHandler
 *
 * Copyright (c) 2022 Interactive Media SpA
 */


const axios = require('axios');
const config = require('/app/src/config');
const validateAuthorization = require('../utilities/validateAuthorization');


async function messageHandler (req, res) {

  //***********************************************************************
  // INITIALIZE INPUT
  let { body, conversation, last, from, to } = req.body;
  const first = req.body.new; // NOTE: new is special keywork in javascript
  const hints = req.body.hints ? JSON.parse(req.body.hints) : {};
  
  //***********************************************************************
  // CHECK AUTHORIZATION
  if (!validateAuthorization({
    authorization: req.headers.authorization,
    securityToken: config.bot.securityToken
  })) return res.status(401).json({ message: 'Unauthorized'});
  
  //*************************************
  // REPLY TO PHONEMYBOT AND CONTINUE
  res.status(200).json({
    code: 'OK',
    message: 'your message will be processed',
  });

  //*************************************
  // RETURN IF TEXT MESSAGE IS EMPTY
  if (body.length <= 0 || last ) return;

  //*************************************
  /* BUILDING THE RESPONSE MESSAGE     */

  let textMessage = '';
  if(first) {  // This is a new session
    // Here the welcome message
    textMessage = 'This is an echo chatbot. Whatever you say I will repeat the same. Try me!'; 
  } else textMesage = body; // Echoing received message

  // Here define the full message
  const responseMessage = {
    body: textMessage,
    from: to,     // inverting sender and receiver
    to: from,     // ...
    conversation,
    last: false,
    first: false
  }

  // completing the http structure
  const { protocol, host, port } = config.pmb
  const resource = '/voicebot/send/' + conversation;
  const url = `${protocol}://${host}:${port}/cloudengine/rest/voicebot/send`;
  const httpConfig = {
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + config.pmb.securityToken,
    }
  };
  let resData = null;

  //*************************************
  /* SEND REPLY MESSAGE TO PHONEMYBOT     */
  await axios.post(url, message, httpConfig)
  .then((response) => {
    resData = response.data;
    if(resData.success!=='true' && resData.reason === 'conversation not found') {
      console.log('PhoneMyBot didn\'t find the corresponding conversation');
    }
  })
  .catch ( (err) => {
    return console.error(' sending message to PMB \n'. err);
  });

  // The message was delivered successfully to PhoneMyBot
  return console.log('Message sent: ', textMessage);
};
  
module.exports = messageHandler;