require(`dotenv`).config();

var {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');
var st = require(`./searchTable`);

const DB_PASS = process.env.DB_PASS;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_NAME= process.env.DB_NAME;
const DB_SERVER = process.env.DB_SERVER;

var sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_SERVER}:${DB_PORT}/${DB_NAME}`,{
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
});

var seshBegin = () => {
    try {
        sequelize.authenticate();
        console.log(`
        Current DB Pass is : ${DB_PASS}\n
        Current DB Port is : ${DB_PORT}\n
        Current DB User is : ${DB_USER}\n
        Current DB Name is : ${DB_NAME}\n
        Connection has been established\n`)
    }
    catch(er){
        console.log(`Error attempting authentication: `, er)
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

let associate = (models) => {
    games.hasMany(models.search)
}


var getGameNames = async (gName, displayNum) => {

    displayNnum = parseInt(displayNum);
    let gameNames = await games.findAll({
        where: {
             name: { [Op.iLike]: `%${gName}%`}}      
    },{ limit: displayNum}
    )
    return gameNames;
}

var getGameNamesNoLimit = async (gName) => {
    let gameNames = await games.findAll({
        where: {
            name: { [Op.iLike]: `%${gName}%`}}             
    })
    return gameNames;
}

var getGameName = async (gName) => {
    let gameName = await games.findOne({
        where: {
            name: { [Op.iLike]: `%${gName}%`}} 
              
    })
    if (gameName === null){
        gameName = {}
    }
    return gameName;
}

var getGameAppID = async (appID) => {
    let gameName = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    return gameName;
}

var gameLinkClicked = async(appID) => {
    let game = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    game.increment('totalTimesClicked');
    return game;
}

var gameSteamLinkClicked = async(appID) => {
    let game = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    game.increment('totalSteamStoreLinkClicked');
    return game;
}

var addGameToDB = async (appId, name1) => {
    await games.create({
        steamAppId: appId,
        name: name1
    })
}

//referenced https://stackoverflow.com/questions/35079286/sequelize-bulkcreate-returns-null-value-for-primary-key
var addGamesToDB = (gamesArr) => {
    games.sync();
    //also referenced https://sequelize.org/master/class/lib/model.js~Model.html#static-method-bulkCreate
    games.bulkCreate(gamesArr, {
        fields: [`steamAppId`, `name`] 
        }
    );
};


var customBulk = async (gamesArr) => {
    for(const game of gamesArr)
        if(game.appid && game.name){
            await addGameToDB(game.appid, game.name);
    }
    
}

var getTopGamesClicked = async (num) => {
    let gamesTop = await sequelize.query(`select * from games Order BY games."totalTimesClicked" DESC Limit ${num}`, {type: QueryTypes.SELECT})
    
    return gamesTop;
}

var getTopGamesStoreClicked = async (num) => {
    let gamesTop = await sequelize.query(`select * from games Order BY games."totalSteamStoreLinkClicked" DESC Limit ${num}`, {type: QueryTypes.SELECT})
    
    return gamesTop;
}




module.exports = {
    seshBegin: seshBegin,
    games: games,
    getGameNames: getGameNames,
    getGameNamesNoLimit: getGameNamesNoLimit,
    getGameName: getGameName,
    getGameAppID: getGameAppID,
    gameLinkClicked: gameLinkClicked,
    gameSteamLinkClicked: gameSteamLinkClicked,
    addGameToDB: addGameToDB,
    addGamesToDB: addGamesToDB,
    customBulk:customBulk,
    getTopGamesClicked,
    getTopGamesStoreClicked
}