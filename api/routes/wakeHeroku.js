var express = require("express");
var router = express.Router();

//Purpose of this API call is to wake heroku up as heroku goes to sleep with 30 minutes of inactivity
router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;