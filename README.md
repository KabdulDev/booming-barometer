# Steam Search Analytics

## A User Focused Search Analytics app

## Project Proposal:
A Steam search engine that returns game items and store checkout pages alongside other game information

Minimum Viable Product: a tag search that returns n number of elements and records in a backend database searches, games clicked, and store clicks

## Architecturally: 
## Front-end:
Home page: Informs user about functionality of website and different features that the website includes across its subpages.
Search/find by tag: User will be able to search for games by tag. A table will appear with games found by search with info for each game, such as:
- Rating by users
- Followers
- Online active players
- Online players peak
Game page: User can click on a game found by search and take them to a more detailed page about the game with info including:
- Developer
- Publisher
- Release date
- Steam Store Link

## Back-end:
API:
get Method, searchTag(tag) ; call to the STEAM API to return games Object array
Post Method, search(search) ; Custom API that'll be called to populate our search table and should be hit on all front end searches;
get Method, game(id): call to the STEAM API to return game Object;
Post Method, game(game): custom api that'll be called when we click on a game element, adds game into our local gameClicked table with the respective  searchId that led to it and increments the timesClicked if not exists; if exists appends respective search type and search id, if not already present and increment timesClicked
Post Method,  storeClicked(): custom put that updates gamesClicked table by id and increments storeLinkClickCount


Database: (To be built and tested with psql and v2 to use dynamo db)
table with searches; columns id, search type, searches, search count ;
table with gameClicked; columns id, foreign_key(has many)searchId's, gameName, gameTags, gameGenres, timesClicked, storeLinkClickCount


Copy limited api returns into our own custom database every 30 mins to an hour; Steam api calls will be to our local db;
Additional Features: Recording user searches in database; additional page that shows what users are searching for; EXTRA BOLD; recording game store click events and seeing which games have the highest number of users using their game store link