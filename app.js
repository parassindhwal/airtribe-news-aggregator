const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const baseRouter = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize routes
app.use(baseRouter);

try {
    if(process.env.NODE_ENV !== 'test') 
    console.log(process.env.NODE_ENV);
    mongoose.connect("mongodb://localhost:27017/newsdb");
} catch (err) {
    console.error("Failed while connecting to mongodb");
}

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

module.exports = app;