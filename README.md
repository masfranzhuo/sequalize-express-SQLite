[![Build Status](https://travis-ci.org/masfranzhuo/sequalize-express-SQLite.svg?branch=master)](https://travis-ci.org/masfranzhuo/sequalize-express-SQLite)
# Node.js sequelize express CRUD
Node.js CRUD application based on the SQLite database design and Express.js framework

This Node.js CRUD code use 
- Express.js framework
- SQLite database
- sequelize ORM
- dotenv module for setting environment
```
npm init

npm install --save express sqlite3 sequelize body-parser

npm install --save dotenv
```

## Database

The application connect to SQLite database using sequalize. The configuration of database added in `models/index.js`. Create folder `data` on the root project for SQLite storage path.

```
var sequelize = new Sequelize('example', 'root', '', {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
    // SQLite database path
    storage: './data/database.sqlite'
});
```

Initialize the configuration and connect to database on `app.js`.
```
var models = require("./models");

models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});
```

This app use database named `example` and `books` table which has 4 columns. 

## Route
Create `routes` folder on the root path and put route file there. After that initialiaze and register route file path on `app.js` file.

```
var books = require('./routes/books');

app.use('/books', books);
```

## Documentation
This API documented with [Swagger](https://app.swaggerhub.com/apis/masfranzhuo/sequalize-express-SQLite/1.0.0) and hosted on [Heroku](http://sequalize-express-sqlite.herokuapp.com/)