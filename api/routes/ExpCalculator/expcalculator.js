

/*module.exports = (express) => {
    // Create express Router
    var router = express.Router();
  
    // add routes
    router.route('/sendCharExp') //or '/'
      .post((req, res) => {
         console.log(req.body);
      });
  
    return router;
  } */


var express = require('express');

var lvlExp = require('./Data');

var router = express.Router();

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/calculate', urlencodedParser, function(req, res) {
    const dataReceived = JSON.parse(req.body.data);

    let totalEXP = 0;
    let totalEXPNeeded = 0;

    for (var i = parseInt(dataReceived.currentLevel); i < parseInt(dataReceived.targetLevel); i++) {
        totalEXPNeeded += lvlExp.levelExp[i];
    }

    totalEXPNeeded -= dataReceived.currentEXP;

    totalEXP = totalEXPNeeded;

    let numHeroWits = 0;
    let numAdventurers = 0;
    let numWanderers = 0;

    while (totalEXPNeeded > 0) {
        //If totalEXPNeeded = 52450
        
        if (totalEXPNeeded >= 20000) {
            numHeroWits += Math.floor(totalEXPNeeded/20000); //2

            totalEXPNeeded -= (numHeroWits*20000);

        } else if (totalEXPNeeded >= 5000) {
            numAdventurers += Math.floor(totalEXPNeeded/5000) //2

            totalEXPNeeded -= (numAdventurers*5000);
        } else {
            numWanderers += Math.ceil(totalEXPNeeded/1000)

            totalEXPNeeded = 0;
        }
    }

    const sendData = JSON.stringify({
        totalEXP: totalEXP,
        numHeroWitsNeeded: numHeroWits,
        numAdventurersNeeded: numAdventurers,
        numWanderersNeeded: numWanderers
    });

    res.send(sendData);
});

module.exports = router;