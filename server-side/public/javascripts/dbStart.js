require(`dotenv`).config();

var Sequelize = require (`sequelize`);
var gt = require(`./gameTable`);
var st = require(`./searchTable`);

gt.seshBegin();

let games = gt.games;
let searches = st.searches;

games.belongsToMany(searches, { through: `GameSearches`});
searches.belongsToMany(gams, {through: `GameSearches`});

