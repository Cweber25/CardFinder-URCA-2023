const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
    req.query.name
    res.send("User List")
});

router.get('/new', (req, res) => {
    res.render("users/new");
});

router.post('/', (req, res) => {
    const isValid = false;
    if (isValid)
    {
        users.push({ firstName : req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    }
    else
    {
        console.log("error");
        res.render('users/new', { firstName : req.body.firstName });
    }
    console.log(req.body.firstName);
    res.send("Hi");
});


// Dynamic Routes
router.route("/:userId")
.get((req, res) => {
    console.log(req.user);
    //req.params.userId;
    res.send(`Get User With ID ${req.params.userId}`);
})
.put((req, res) => {
    req.params.userId;
    res.send(`Update User With ID ${req.params.userId}`);
})
.delete((req, res) => {
    req.params.userId;
    res.send(`Delete User With ID ${req.params.userId}`);
});

const users = [{ name: "Kyle"}, { name: "Sally"}];
router.param("userId", (req, res, next, userId) => {
    req.user = users[userId];
    next();
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

// Same as above code block
/*router.get('/:userId', (req, res) => {
    req.params.userId;
    res.send(`Get User With ID ${req.params.userId}`);
});

router.put('/:userId', (req, res) => {
    req.params.userId;
    res.send(`Update User With ID ${req.params.userId}`);
});

router.delete('/:userId', (req, res) => {
    req.params.userId;
    res.send(`Delete User With ID ${req.params.userId}`);
}); */

module.exports = router;