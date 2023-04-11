const express = require('express');
const { response } = require('../app');
const router = express.Router();

var database = require('../database');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/new_user', (req, res) => {
    res.send(console.log("Made it into post"));
    var email = request.body.user_email;
    var password = request.body.user_password;
    var password2 = request.body.user_password2;
    if (email && password && password == password2)
    {
        //res.send(" E:" + email + " P: " + password + " P2: " + password2)

        query=`INSERT INTO user_accounts(user_email, user_password) VALUES (?,?)`;
        database.query(query, [email, password], function(error,data)
        {
            if(error)
            {
              response.send(error);
            }
            else{
              response.send('Data Inserted');
            }});
    }
})


module.exports = router;