var express = require('express');
var router = express.Router();
var bodyParser = require(`body-parser`);
var cors = require(`cors`);

router.use(cors());
router.use(bodyParser.urlencoded({extended:false}));

//local javascript modules
var s = require(`../public/javascripts/searchTable.js`);
var g = require(`../public/javascripts/gameTable`);
var gS = require(`../public/javascripts/gameSearches`)
var steam = require(`../public/javascripts/steamCalls`);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/games/term=:gName`, async function (req, res) {
  let gName = req.params.gName;
  let limit = 10;
  console.log(`Request received for /games/term=${gName}`);

  let games = await g.getGameNames(gName,limit, function(err, results){
    if(err){
      console.log(err.stack);
    }
  // console.log(results.rows);
  })
  console.log(games[0]);
  res.send(games);
});

router.get(`/games/term=:gName/limit=:limit`, async function (req, res) {
  let gName = req.params.gName;
  let limit = req.params.limit;
  console.log(`Request received for /games/term=${gName}/limit=${limit}`);

  let games = await g.getGameNames(gName,limit, function(err, results){
    if(err){
      console.log(err.stack);
    }
  // console.log(results.rows);
  })
  console.log(games[0]);
  res.send(games);
});

router.get(`/games/term=:gName/limit=nolimit`, async function (req, res) {
  let gName = req.params.gName;
  console.log(`Request received for /games/term=${gName}/limit=nolimit`);

  const games = await g.getGameNamesNoLimit(gName,function(err, results){
    if(err){
      console.log(err.stack);
    }
  // console.log(results.rows);
  res.send(games);
  })
})

router.get(`/game/name=:gName`, async function (req, res) {
  let gName = req.params.gName;
  console.log(`Request received for /game/name=${gName}`);

  const gameOne = await g.getGameNames(gName, 1, function(err, results){
    if(err){
      console.log(err.stack);
    }
  })
  // console.log(results.rows);
  res.send(gameOne);
})

router.get(`/game/id=:appId`, async function (req, res) {
  let appId = req.params.appId;
  console.log(`Request received for /game/${appId}`);

  const gameOne = await g.getGameAppID(appId, function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(results.rows);
  res.send(gameOne);
  })
})

router.get(`/game/steam/id=:appId`, async function (req, res) {
  let appId = req.params.appId;
  console.log(`Request received for /game/steam/id=${appId}`);

  const gameOne = await steam.steamSearchId(appId, function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(results.rows);
  })
  res.send(gameOne.data);
  // console.log(gameOne.data)
  // res.send({})
})

router.get(`/search/top/num=:num`, async function (req, res){
  let {num} = req.params;
  
  console.log(`Request received for /search/top/num=${num}`);

  let tops = await s.getTopSearch(num);
  // console.log(tops[0]);
  res.send(tops)

})

router.get(`/game/top/link/num=:num`, async function (req, res){
  let {num} = req.params;
  
  console.log(`Request received for /game/top/link/num=${num}`);

  let tops = await g.getTopGamesClicked(num);
  console.log(tops[0]);
  res.send(tops)

})

router.get(`/game/top/store/num=:num`, async function (req, res){
  let {num} = req.params;
  
  console.log(`Request received for /search/top?num=${num}`);

  let tops = await g.getTopGamesStoreClicked(num);
  console.log(tops[0]);
  res.send(tops)

})

router.get(`/game/appID=:appId/analytics/clicks/num=:num`, async function (req, res){
  let {appId, num} = req.params;
  
  console.log(`Request received for /game/appID=${appId}/analytics/clicks/num=${num}`);

  let tops = await gS.getTopSearchesForGameClicks(appId,num);
  console.log(tops[0]);
  res.send(tops)

})

router.get(`/game/appID=:id/analytics/store/num=:num`, async function (req, res){
  let {id, num} = req.params;
  
  console.log(`Request received for /game/appID=${appId}/analytics/store/num=${num}`);

  let tops = await gS.getTopSearchesForGameStore(appId,num);
  console.log(tops[0]);
  res.send(tops)

})

router.post(`/searchtype=:type/term=:term`, function (req, res){
  let type = req.params.type;
  let term = req.params.term;
  console.log(`Request received for /searchtype=${type}/term=${term}`);

  s.searchInsertOrUpdate(type,term);
  res.send("Search Added")

})

//referenced https://stackoverflow.com/questions/41736413/multiple-optional-route-parameters-in-express
//use when link is clicked from search
router.post(`/searchtype=:type/term=:term/appId=:appId/gameClick`, function(req, res){
  let type = req.params.type;
  let term = req.params.term;
  let appId = req.params.appId;
  console.log(`Request received for /searchtype=${type}/term=${term}/appId${appId}`);

  gS.gameSearchLinkClickedInsertOrUpdate(type,term,appId)
  res.send("Link click registered")

});


router.post(`/searchtype=:type/term=:term/appId=:appId/storeClick`, function(req, res){
  let type = req.params.type;
  let term = req.params.term;
  let appId = req.params.appId;
  console.log(`Request received for /searchtype=${type}/term=${term}/appId${appId}`);

  gS.gameSearchStoreLinkClickedInsertOrUpdate(type,term,appId);
  res.send("Store link click registered")

});





module.exports = router;
