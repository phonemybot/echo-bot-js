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
    host: 'cloudengine.imnet.com',
    port: 8443,          // You can change this
    protocol: 'https',
    securityToken: '--'  // !! should be replaced with the security token
                         // provided with the PhoneMyBot channel
  }
}