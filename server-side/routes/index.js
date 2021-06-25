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
  console.log(`Request received for /games/term=${gName}/limit=${limit}`);

  const games = await g.getGameNamesNoLimit(gName,function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(results.rows);
  res.send(games);
  })
})

router.get(`/game/name=:gName`, async function (req, res) {
  let gName = req.params.gName;
  console.log(`Request received for /game/${gName}`);

  const gameOne = await g.getGameName(gName, function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(results.rows);
  res.send(gameOne);
  })
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

router.post(`/searchtype=:type/term=:term`, function (req, res){
  let type = req.params.type;
  let term = req.params.term;
  console.log(`Request received for /searchtype=${type}/term=${term}`);

  s.searchInsertOrUpdate(type,term);

})

//referenced https://stackoverflow.com/questions/41736413/multiple-optional-route-parameters-in-express
//use when link is clicked from search
router.post(`/searchtype=:type/term=:term/appId=:appId/gameClick`, function(req, res){
  let type = req.params.type;
  let term = req.params.term;
  let appId = req.params.appId;
  console.log(`Request received for /searchtype=${type}/term=${term}/appId${appId}`);

  gS.gameSearchLinkClicked(type,term,appId)

});


router.post(`/searchtype=:type/term=:term/appId=:appId/storeClick`, function(req, res){
  let type = req.params.type;
  let term = req.params.term;
  let appId = req.params.appId;
  console.log(`Request received for /searchtype=${type}/term=${term}/appId${appId}`);

  gS.gameSearchStoreLinkClicked(type,term,appId)

});





module.exports = router;
