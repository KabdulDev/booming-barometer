require(`dotenv`).config();

// Package imports
var axios = require(`axios`);

//for getting an array of all current game items
async function games() {
    const allGamesResponse = await axios.get(`https://api.steampowered.com/ISteamApps/GetAppList/v2/`);
    // console.log(allGames);
    // console.log(allGames.data.applist.apps);// indiviudal item will be an element inside the array apps; the entire array of apps exist would be data.applist.apps
    const allGames = allGamesResponse.data.applist.apps
    return allGames;
};

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

async function steamSearchId( id) {
    const game = await axios.get(`http://store.steampowered.com/api/appdetails/?appids=${id}`)
    console.log(game);
    return game;
}

module.exports = {
    games:games,
    searchGames:searchGames,
    steamSearchId:steamSearchId

}
// steamSearchId(1151640)
// searchGames("Abadoned")