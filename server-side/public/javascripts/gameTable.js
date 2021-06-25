require(`dotenv`).config();

var {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');
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

let associate = (models) => {
    games.hasMany(models.search)
}


var getGameNames = async (gName, displayNum) => {
    // let count = (displayNum === null) ? 10 : displayNum;
    // games.sync();
    displayNnum = parseInt(displayNum);
    let gameNames = await games.findAll({
        where: {
             name: { [Op.iLike]: `%${gName}%`}}      
    },{ limit: displayNum}
    )
    return gameNames;
}

var getGameNamesNoLimit = async (gName) => {
    // games.sync();
    let gameNames = await games.findAll({
        where: {
            name: { [Op.iLike]: `%${gName}%`}}             
    })
    return gameNames;
}

var getGameName = async (gName) => {
    // games.sync();
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
    // games.sync();
    let gameName = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    return gameName;
}

var gameLinkClicked = async(appID) => {
    // games.sync();
    let game = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    game.increment('totalTimesClicked');
    return game;
}

var gameSteamLinkClicked = async(appID) => {
    // games.sync();
    let game = await games.findOne({
        where: {
            steamAppId: appID
        }
    })
    game.increment('totalSteamStoreLinkClicked');
    return game;
}

var addGameToDB = async (appId, name1) => {
    // games.sync();
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

// const gamesTest = [
//     {
//         "appid": 1014840,
//         "name": "Heart and Axe1"
//     },
//     {
//         "appid": 1014850,
//         "name": "Iridium1",
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

// addGamesToDB(gamesTest);
// let gameX=gamesTest[0];
// addGameToDB(gameX.appid, gameX.name);

var customBulk = async (gamesArr) => {
    for(const game of gamesArr)
        if(game.appid && game.name){
            // console.log("entered");
            await addGameToDB(game.appid, game.name);
            // console.log("posted");
    }
    
}

var getTopGamesClicked = async (num) => {
    let gamesTop = await sequelize.query(`select * from games Order BY games."totalTimesClicked" DESC Limit ${num}`, {type: QueryTypes.SELECT})
    
    // console.log(search);
    return gamesTop;
}

var getTopGamesStoreClicked = async (num) => {
    let gamesTop = await sequelize.query(`select * from games Order BY games."totalSteamStoreLinkClicked" DESC Limit ${num}`, {type: QueryTypes.SELECT})
    
    // console.log(search);
    return gamesTop;
}


// customBulk(gamesTest);


// gamesTest.map(ele =>{
//     ele.assign
// })


// console.log("Function Tests");
// let test1 = async () => {
//     let test1 = await getGameNames("Half-Life", 10);
//     console.log(test1);
// }
// test1();


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