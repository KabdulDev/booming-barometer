var express = require('express');
var router = express.Router();
var bodyParser = require(`body-parser`);
var cors = require(`cors`);

router.use(cors());
router.use(bodyParser.urlencoded({extended:false}));

//local javascript modules
var search = require(`../public/javascripts/searchTable.js`);
var game = require(`../public/javascripts/gameTable`);
var gameSearch = require(`../public/javascripts/gameSearches`);
const { response } = require('../app.js');
const { games } = require('../public/javascripts/gameTable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/games/term=:gName`, async function (req, res) {
  let gName = req.params.gName;
  console.log(`Request received for /games/${gName}`);

  const games = await game.getGameNames(gName, function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(result.rows);
  res.send(games);
  })
})

router.get(`/game/name=:gName`, async function (req, res) {
  let gName = req.params.gName;
  console.log(`Request received for /game/${gName}`);

  const gameOne = await game.getGameName(gName, function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(result.rows);
  res.send(gameOne);
  })
})

router.get(`/game/id=:appId`, async function (req, res) {
  let appId = req.params.appId;
  console.log(`Request received for /game/${appId}`);

  const gameOne = await game.getGameAppID(appId, function(err, results){
    if(err){
      console.log(err.stack);
    }
  console.log(result.rows);
  res.send(gameOne);
  })
})

router.post(`/searchtype=:type/term=:term`, function (req, res){
  let type = req.params.type;
  let term = req.params.term;
  console.log(`Request received for /searchtype=${type}/term=${term}`);

  search.searchInsertOrUpdate(type,term);

})

//referenced https://stackoverflow.com/questions/41736413/multiple-optional-route-parameters-in-express
//use when link is clicked from search
router.post(`/searchtype=:type/term=:term/appId=:appId/gameClick`, function(req, res){
  let type = req.params.type;
  let term = req.params.term;
  let appId = req.params.appId;
  console.log(`Request received for /searchtype=${type}/term=${term}/appId${appId}`);

  gameSearch.gameSearchLinkClicked(type,term,appId)

});


router.post(`/searchtype=:type/term=:term/appId=:appId/storeClick`, function(req, res){
  let type = req.params.type;
  let term = req.params.term;
  let appId = req.params.appId;
  console.log(`Request received for /searchtype=${type}/term=${term}/appId${appId}`);

  gameSearch.gameSearchStoreLinkClicked(type,term,appId)

});





module.exports = router;
