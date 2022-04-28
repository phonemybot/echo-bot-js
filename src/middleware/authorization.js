/* 
 * - ECHO BOT -
 * authorization middleware
 *
 * Copyright (c) 2022 Interactive Media SpA
 */
const validateAuthorization = require('../utilities/validateAuthorization');

const authorization = async (req, res, next) => {

  if (!validateAuthorization({
    authorization: req.headers.authorization,
    securityToken: config.bot.securityToken
  })) {
    console.log('rejecting unauthorized request!');
    return res.status(401).json({ message: 'Unauthorized'});
  }

  next();
};

module.exports = authorization;