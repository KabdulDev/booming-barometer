require(`dotenv`).config();

var {Sequelize, DataTypes, QueryTypes} = require('sequelize');
var gt = require(`./gameTable`);
var st = require(`./searchTable`);

const DB_PASS = process.env.DB_PASS;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_NAME= process.env.DB_NAME;

var sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`)

// const games = {};
// const searches = {};

// // gt.seshBegin;
//  g1= () => {
//     let games = gt.games;
//     games.sync();
//     return games;
// }
// g1()
// // g1.then(function(retG) {
// //     games = retG;
//     console.log(games)
// // })

// const s1= () => {
//     let searches = st.searches;
//     searches.sync();
//     return searches;
// }
// s1()
// // s1.then(function(retS) {
// //     searches = retS;
//     console.log(searches)
// // })


let game_searches = sequelize.define(`game_searches`, {
    searchId: {
        type:Sequelize.INTEGER,
        references: {
            model: st.searches,
            key: 'id'
          }

    },
    gameId: {
        type:Sequelize.INTEGER,
        references: {
            model: gt.games,
            key: 'id'
          }
    },
    searchGamesTimesClicked: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    searchGamesSteamStoreLinkClicked: {
        type: Sequelize.INTEGER,
        defaultValue:0
    }
    
})


game_searches.sync();
gt.games.belongsToMany(st.searches, {through: game_searches});
st.searches.belongsToMany(gt.games, {through: game_searches});


var getTopSearchesForGameClicks= async (gameAppId, displayNum) => {
    let count = (displayNum === null) ? 10 : parseInt(displayNum);
    game_searches.sync();
    let game = await gt.getGameAppID(gameAppId);
    let searchReturns = await sequelize.query(`Select  "game_searches"."searchGamesTimesClicked", searches."searchTerm", searches."searchCount"
    from "game_searches"
    JOIN searches on searches.id = "game_searches"."searchId" 
    AND "game_searches"."gameId" = ${game.id} 
    Order by "game_searches"."searchGamesTimesClicked" DESC
    Limit ${count}`, {type: QueryTypes.SELECT})

    return searchReturns;
}

var getTopSearchesForGameStore= async (gameAppId, displayNum) => {
    let count = (displayNum === null) ? 10 : parseInt(displayNum);
    game_searches.sync();
    let game = await gt.getGameAppID(gameAppId);
    let searchReturns = await sequelize.query(`Select  "game_searches"."searchGamesTimesClicked", searches."searchTerm", searches."searchCount"
    from "game_searches"
    JOIN searches on searches.id = "game_searches"."searchId" 
    AND "game_searches"."gameId" = ${game.id} 
    Order by "game_searches"."searchGamesSteamStoreLinkedClicked" DESC
    Limit ${count}`, {type: QueryTypes.SELECT})

    return searchReturns;
}


var newGameSearch = async (game, search) => {
    // searches.sync();
    // let test = await gt.getGameAppID(appID);
    // // console.log(`game: ${test}`)
    // let search = await st.getSearch(type, term);
    // // console.log(`search: ${search}`)
    await game_searches.create({
        gameId: game.id,
        searchId: search.id
    });

}

var gameSearchLinkClickedInsertOrUpdate = async(type, term, appID) => {
    // game_searches.sync();
    let game = await gt.getGameAppID(appID);
    console.log(`game: ${game}`)
    let search = await st.getSearch(type, term);
    console.log(`search: ${search}`)
    if(game === null || search === null){
        return null
    }
    let gSIncrement = await game_searches.findAll({
        where: {
            gameId: game.id,
            searchId: search.id
        }
    }, {limit: 1})
    game.increment('totalTimesClicked');
    console.log("game search: " + gSIncrement)
    if(gSIncrement.length===0){
        newGameSearch(game, search);
    }
    else {
        gSIncrement[0].increment(`searchGamesTimesClicked`);
    
    }
    return gSIncrement;
}

var gameSearchStoreLinkClickedInsertOrUpdate = async(type, term, appID) => {
    // game_searches.sync();
    let game = await gt.getGameAppID(appID);
    let search = await st.getSearch(type, term);
    if(game === null || search === null){
        return null;
    }
    let gSIncrement = await game_searches.findAll({
        where: {
            gameId: game.id,
            searchId: search.id
        }
    },{limit:1})
    game.increment('totalSteamStoreLinkClicked');
    if(gSIncrement.length===0){
        newGameSearch(game, search);
    }
    else{
        gSIncrement[0].increment(`searchGamesSteamStoreLinkClicked`);
    }
    return gSIncrement;
}

// gameSearchLinkClickedInsertOrUpdate("name", "half", 70);
let joe = async () => {
    let test = await getTopSearchesForGameNameClicks(1382330, 2)
    console.log(test)
}

// joe();

// getTopSearchesForGameNameClicks()
// getTopSearchesForGameNameStore()

module.exports = {
    game_searches: game_searches,
    getTopSearchesForGameClicks,
    getTopSearchesForGameStore,
    gameSearchLinkClickedInsertOrUpdate,
    gameSearchStoreLinkClickedInsertOrUpdate
}



