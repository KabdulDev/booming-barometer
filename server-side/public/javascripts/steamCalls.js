require(`dotenv`).config();

const STEAM_WEB_API = process.env.STEAM_WEB_API;

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

async function steamAllGames () {
    const games = [];
    let last = 0;
    let count = 0;
    let have_more_results = true;
    while(have_more_results){
        console.log(`Receive last of ${last}`)
        const tempG = await axios.get(`https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${STEAM_WEB_API}&include_games=1&last_appid=${last}&max_results=50000`)
        last = tempG.data.response.last_appid;
        have_more_results= tempG.data.response.have_more_results;
        count++;
        console.log(`Output new last of ${last} \nHave more results is ${have_more_results} \nAPI has run ${count} times`)
        let tempArr = tempG.data.response.apps;
        console.log(tempArr[0]);
        games.push(tempArr)
    }
    return games.flat();
}

async function steam500Games () {
    const games = [];
    let last = 0;
    let count = 0;
    let have_more_results = true;
    
    console.log(`Receive last of ${last}`)
    const tempG = await axios.get(`https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${STEAM_WEB_API}&include_games=1&last_appid=${last}&max_results=500`)
    last = tempG.data.response.last_appid;
    have_more_results= tempG.data.response.have_more_results;
    count++;
    console.log(`Output new last of ${last} \nHave more results is ${have_more_results} \nAPI has run ${count} times`)
    let tempArr = tempG.data.response.apps;
    console.log(tempArr[0]);
    games.push(tempArr)
    
    return games.flat();
}

// steamAllGames();

module.exports = {
    games:games,
    searchGames:searchGames,
    steamSearchId:steamSearchId,
    steamAllGames: steamAllGames,
    steam500Games

}
// steamSearchId(1151640)
// searchGames("Abadoned")