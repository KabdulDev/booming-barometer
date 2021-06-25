require(`dotenv`).config();

var Sequelize = require (`sequelize`);
var gamesT = require(`./gameTable`);
var searchT = require(`./searchTable`);
var gameSearchT = require(`./gameSearches`);
var steam = require(`./steamCalls`);

gamesT.games.sync();
searchT.searches.sync();
gameSearchT.gameSearches.sync();

let gameLoad = async () => {
    let games = await steam.steamAllGames();
    gamesT.customBulk(games);
}

// let testGameLoad = async () => {
//     let games= await steam.steam500Games();
//     console.log(games[0])
//     console.log(games[0].appid);
//     console.log(games[0].name);
//     await gamesT.customBulk(games);
// }


// gameLoad();
// testGameLoad();
// const gamesTest = [
//     {
//         "appid": 1014840,
//         "name": "Test1"
//     },
//     {
//         "appid": 1014850,
//         "name": "Test2",
//         "last_modified": 1603925741,
//         "price_change_number": 11351614
//     },
//     {
//         "appid": 1014880,
//         "name": "By Moonlight",
//         "last_modified": 1551343594,
//         "price_change_number": 9795476
//     },
//     {
//         "appid": 1014890,
//         "name": "Warforged",
//         "last_modified": 1557963540,
//         "price_change_number": 11351614
//     },
//     {
//         "appid": 1014900,
//         "name": "Hex Defense",
//         "last_modified": 1561135786,
//         "price_change_number": 11851060
//     }
// ]

// gamesT.customBulk(gamesTest)






