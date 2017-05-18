const diff = require('deep-diff');
module.exports = (oMember, nMember) => {
  console.log(diff(oMember, nMember));
};