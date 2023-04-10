//const cors = require('cors'); ------------------
//const dotenv = require('dotenv'); --------------
//dotenv.config(); More research before using this.
//app.use(cors()); -------------------------------

const express = require('express');
const app = express();
var path = require('path');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);