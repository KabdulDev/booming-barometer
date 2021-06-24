require(`dotenv`).config();

var Sequelize = require (`sequelize`);
var st = require(`./searchTable`);

const DB_PASS = process.env.DB_PASS;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_NAME= process.env.DB_NAME;

var sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`)

var seshBegin = () => {
    try {
        sequelize.authenticate();
        console.log("Connection has been established")
    }
    catch(er){
        console.log("Error attempting authentication: ", er)
    }
}

var games = sequelize.define('game', {
    steamAppId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    totalTimesClicked: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    totalSteamStoreLinkClicked: {
        type: Sequelize.INTEGER,
        defaultValue:0
    }
});


var getGameNames = async (gName, displayNum) => {
    let count = (displayNum === null) ? 10 : displayNum;
    games.sync();
    let gameNames = await games.findAll({
        where: {
            name: {
            [Op.substring]:gName
            }
        }       
    },{ limit: count}
    )
    return gameNames;
}

var getGameNamesNoLimit = async (gName) => {
    games.sync();
    let gameNames = await games.findAll({
        where: {
            name: {
            [Op.substring]:gName
            }
        }       
    })
    return gameNames;
}

var getGameName = async (gName) => {
    games.sync();
    let gameName = await games.findOne({
        where: {
            name: gName
        }       
    })
    return gameName;
}

var getGameAppID = async (appID) => {
    games.sync();
    let gameName = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    return gameName;
}

var gameLinkClicked = async(appID) => {
    games.sync();
    let game = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    game.increment('totalTimesClicked');
    return game;
}

var gameSteamLinkClicked = async(appID) => {
    games.sync();
    let game = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    game.increment('totalSteamStoreLinkClicked');
    return game;
}

module.exports = {
    seshBegin: seshBegin,
    games: games,
    getGameNames: getGameNames,
    getGameNamesNoLimit: getGameNamesNoLimit,
    getGameName: getGameName,
    getGameAppID: getGameAppID,
    gameLinkClicked: gameLinkClicked,
    gameSteamLinkClicked: gameSteamLinkClicked
}