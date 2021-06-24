require(`dotenv`).config();

var Sequelize = require (`sequelize`);
var gt = require(`./gameTable`);
var st = require(`./searchTable`);

const DB_PASS = process.env.DB_PASS;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_NAME= process.env.DB_NAME;

var sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`)


gt.seshBegin();

let games = gt.games;
let searches = st.searches;

let gameSearches = sequelize.define(`GameSearches`, {
    searchId: {
        type:Sequelize.INTEGER,
        references: {
            model: searches,
            key: 'id'
          }

    },
    gamesId: {
        type:Sequelize.INTEGER,
        references: {
            model: games,
            key: 'id'
          }
    },
    searchGamestimesClicked: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    searchGamessteamStoreLinkClicked: {
        type: Sequelize.INTEGER,
        defaultValue:0
    }
    
})

games.belongsToMany(searches, {through: gameSearches});
searches.belongsToMany(games, {through: gameSearches});

var getTopSearchesForGameName= async (gameName, displayNum) => {
    let count = (displayNum === null) ? 10 : displayNum;
    gameSearches.sync();
    let game = await gt.getGameName(gameName);
    let searchReturns = await gameSearches.findAll({
        where: {
            gamesId: game.id
        }
    },{ limit: count}
    )

    return searchReturns;
}

var gameSearchLinkClicked = async(type, term, appID) => {
    gameSearches.sync();
    let game = await gt.getGameAppId(appID);
    let search = await st.getSearch(type, term);
    let gSIncrement = await gameSearches.findOne({
        where: {
            gamesId: game.id,
            searchId: search.id
        }
    })
    game.increment('totalTimesClicked');
    gSIncrement.increment(`searchGamestimesClicked`);
    return gSIncrement;
}

var gameSearchStoreLinkClicked = async(type, term, appID) => {
    gameSearches.sync();
    let game = await gt.getGameAppId(appID);
    let search = await st.getSearch(type, term);
    let gSIncrement = await gameSearches.findOne({
        where: {
            gamesId: game.id,
            searchId: search.id
        }
    })
    game.increment('totalSteamStoreLinkClicked');
    gSIncrement.increment(`searchGamessteamStoreLinkClicked`);
    return gSIncrement;
}

// var get

module.exports = {
    gameSearches: gameSearches,
    getTopSearchesForGameName: getTopSearchesForGameName,
    gameSearchLinkClicked: gameSearchLinkClicked,
    gameSearchStoreLinkClicked: gameSearchStoreLinkClicked
}



