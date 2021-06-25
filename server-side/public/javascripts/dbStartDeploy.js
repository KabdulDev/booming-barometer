require(`dotenv`).config();

var Sequelize = require (`sequelize`);
var gamesT = require(`./gameTable`);
var searchT = require(`./searchTable`);
var gameSearchT = require(`./gameSearches`);
var steam = require(`./steamCalls`);

gamesT.games.sync();
searchT.searches.sync();
gameSearchT.gameSearches.sync();

let gameLoad = async (num) => {
    num = parseInt(num,10)
    let games = await steam.steamNumGames(num);
    gamesT.customBulk(games);
}

gameLoad(9000);








