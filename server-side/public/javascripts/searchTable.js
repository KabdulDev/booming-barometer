require(`dotenv`).config();

var {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');
var gt = require(`./gameTable`);

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

var searches = sequelize.define('search', {
    searchType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            customValidator (value) {
                let validSearchTypes = ["name", "tag"]
                if ( !(validSearchTypes.includes(value)) ){
                    console.log("Must be a valid search type");
                }
            }
        }

    },
    searchTerm: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    searchCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }


});

let associate = (models) => {
    searches.hasMany(models.games)
}

var newSearch = async (type, term) => {
    // searches.sync();
    await searches.create({
            searchType: type,
            searchTerm: term
    });

}

var searchInsertOrUpdate = async (type, term) => {
    // searches.sync();
    
    console.log(`entered with ${type} and {$term}`)
    let search = await searches.findAll({
        where: {
            searchType: type,
            searchTerm: term
        } 
    },{limit: 1})
    if(search[0] == null){
        newSearch(type,term);
    }
    else {
        search[0].increment('searchCount');
    }
    
}

var showAllSearches = async () => {
    searches.sync();
    let allSearches = await searches.findall({
        where: {
            searchCount: { [Op.gte]: 1 }
        }
    })
    return allSearches;
}

var getSearch = async (type, term) => {
    // searches.sync();
    let search = await searches.findOne({
        where: {
            searchType: type,
            searchTerm: term
        }
    })
    return search;
}

var getTopSearch = async (num) => {
    let lim = parseInt(num,10);
    console.log(lim);
    let search = await sequelize.query(`Select * from "searches" Order BY "searches"."searchCount" DESC LIMIT ${lim}`, {type: QueryTypes.SELECT})
    // console.log(search);
    return search;
}

// getTopSearch(3);
module.exports = {
    searches: searches,
    newSearch: newSearch,
    searchInsertOrUpdate: searchInsertOrUpdate,
    showAllSearches: showAllSearches,
    getSearch: getSearch,
    getTopSearch
}