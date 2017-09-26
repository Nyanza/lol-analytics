const request = require("request");

const champUrl = 'https://raw.githubusercontent.com/Nyanza/lol-analytics/master/scraping/champions.json';

function getChamps() {
  return Promise(resolve, reject) {
    request(champUrl, (err, resp) => {
      if(err) reject(err);
      console.log(resp)
      resolve(resp);
    }
  )};
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return getChamps().then((resp) => {
        return queryInterface.bulkInsert('Champions', resp, {});
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
