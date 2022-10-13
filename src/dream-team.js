const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = ''
  if(Array.isArray(members)) {
    members.forEach(el => {
      if (typeof el === 'string') {
        let symbol = el.trim().slice(0, 1).toUpperCase()
        result += symbol
      }
    })
  }
  return result.split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
