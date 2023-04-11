const express = require('express');
const app = express();
var path = require('path');

// Importing Routes
const createAccountRouter = require('./routes/user_sign_in');
const userRouter = require('./routes/users');

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// Using Imported Routes
app.use('/users', userRouter);
app.use('/create_account', createAccountRouter);

// Renders the Login Page ... Not yet functional
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000);

module.exports = app;