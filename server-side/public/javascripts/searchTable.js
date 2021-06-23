require(`dotenv`).config();

var Sequelize = require (`sequelize`);

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

var newSearch = (type, term) => {
    searches.sync();
    async () => {
        let search = await searches.create({
            searchType: type,
            searchTerm: term
        });
    }
}

var searchInsertOrUpdate = (type, term) => {
    searches.sync();
    async () => {
        let search = await searches.findOne({
            where: {
                searchType: type,
                searchTerm: term
            } 
        })
       if(search == null){
           newSearch(type,term);
       }
       else {
        search.increment('searchCount');
       }
    }
}

module.exports = {
    searches: searches,
    newSearch: newSearch,
    searchInsertOrUpdate: searchInsertOrUpdate
}