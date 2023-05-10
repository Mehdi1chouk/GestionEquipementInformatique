path = require('path');
const express = require('express');
cors = require('cors');
const mongoose = require('mongoose');
const createError = require('http-errors');
const bodyParser = require('body-parser');
dbConfig = require('./db/database');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Connected to database');
    },
    error => {
        console.log('Error connecting' + error)
    }
)



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());


const userRoute = require('./routes/laptoproutes');
const { nextTick } = require('process');
const { error } = require('console');

app.use('/endpoint', userRoute);

const port = process.env.port || 8080;

const server = app.listen(port, () => {
    console.log('port Connected to : ' + port)
})

app.use((req, res, next) => {
    next(createError(404));
});

app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

app.use(function(err, req, res, next) {
    if (!err.statusCode) err.statusCode == 500;
    res.status(err.statusCode).send(err.message);
})