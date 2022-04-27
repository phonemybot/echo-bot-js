/* 
 * - ECHO BOT -
 * validateAuthorization
 *
 * Copyright (c) 2022 Interactive Media SpA
 */


function validateAuthorization  ({authorization, securityToken}) {
  const items = authorization.split(" ");
  if (items 
    && items[0].toLowerCase() === 'basic' 
    && items[1] === securityToken) return true;
  else return false;
}

module.exports = validateAuthorization;