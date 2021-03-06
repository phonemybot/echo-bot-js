/* 
 * - ECHO BOT JS-
 *
 *  configuration file
 * 
 * Copyright (c) 2022 Interactive Media SpA
 */


module.exports = {
  // *************************************
  // Bot configuration parameters
  bot: {
    port: '3034', 
    securityToken: '-- ' // !! should be replaced with your security token
                         // that you configured in the control panel
                         // associated with your channel
  },
  // *************************************
  // PhoneMyBot configuration parameters
  pmb: {
    // You should change the following url according to the endpoint
    // indicated in the control panel of  your PhoneMyBot chatbot
    url: 'https://cloudengine.imnet.com:8443/cloudengine/rest/voicebot/send', 
    securityToken: '--'  // !! should be replaced with the security token
                         // provided with the PhoneMyBot channel
  }
}