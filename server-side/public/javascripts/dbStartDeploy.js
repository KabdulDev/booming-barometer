require(`dotenv`).config();

var Sequelize = require (`sequelize`);
var gamesT = require(`./gameTable`);
var searchT = require(`./searchTable`);
var gameSearchT = require(`./game_searches`);
var steam = require(`./steamCalls`);

gamesT.games.sync();
searchT.searches.sync();
gameSearchT.game_searches.sync();

let gameLoad = async (num) => {
    num = parseInt(num,10)
    let games = await steam.steamNumGames(num);
    gamesT.customBulk(games);
}

gameLoad(9000);








