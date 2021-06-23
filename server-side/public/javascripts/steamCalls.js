require(`dotenv`).config();

// Package imports
var axios = require(`axios`);
var Sequelize = require (`sequelize`);

// const DB_PASS = process.env.DB_PASS;
// const DB_PORT= process.env.DB_PORT;
// const DB_USER= process.env.DB_USER;
// const DB_NAME= process.env.DB_NAME;

// var sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`)


async function games() {
    const allGamesResponse = await axios.get(`https://api.steampowered.com/ISteamApps/GetAppList/v2/`);
    // console.log(allGames);
    // console.log(allGames.data.applist.apps);// indiviudal item will be an element inside the array apps; the entire array of apps exist would be data.applist.apps
    const allGames = allGamesResponse.data.applist.apps
    return allGames;
};


// let Games = games();

// console.log(Games);
// console.log(Games.data);

async function searchGames(name) {

    const gamesResult= [];
    const gamesList= await games();
    // await gamesList.map(game => {
    //     if(game.name.includes({name})){
    //         gamesResult.push(game)
    //     }
    //     console.log(gamesResult);
    //     return gamesResult;
    // })

    // console.log(gamesList);
    // .then( () => { 
    //     // console.log(gamesList);
    //     gamesList.map(game => {
    //         if(game.name.includes({name})){
    //             gamesResult.push(game)
    //         }
    //         console.log(gamesResult);
    //         return gamesResult;
    //     })})
    // .then( () =>{
    //     console.log(gamesHit);
    //     return gamesHit;
    // })
    
}

// let searchResults = async () => {
//     await searchGames("Abadoned Sawmill");
// }
searchGames("Abadoned")