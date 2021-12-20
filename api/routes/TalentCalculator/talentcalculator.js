var express = require('express');

var router = express.Router();

router.post('/calculate', function(req, res) {
    const dataReceived = JSON.parse(req.body.data);

    const numTalentMats = [0, 3, 2, 4, 6, 9, 4, 6, 12, 16]

    let finalGreen = 0;
    let finalBlue = 0;
    let finalPurple = 0;

    for (var i = parseInt(dataReceived.currentNormalAttackLvl); i < parseInt(dataReceived.targetNormalAttackLvl); i++) {
        if (i === 1) {
            //num of green
            finalGreen += numTalentMats[i];
        } else if (i >= 2 && i <= 5) {
            finalBlue += numTalentMats[i];
        } else {
            finalPurple += numTalentMats[i];
        }
    }

    for (var i = parseInt(dataReceived.currentSkillLvl); i < parseInt(dataReceived.targetSkillLvl); i++) {
        if (i === 1) {
            //num of green
            finalGreen += numTalentMats[i];
        } else if (i >= 2 && i <= 5) {
            finalBlue += numTalentMats[i];
        } else {
            finalPurple += numTalentMats[i];
        }
    }

    for (var i = parseInt(dataReceived.currentBurstLvl); i < parseInt(dataReceived.targetBurstLvl); i++) {
        if (i === 1) {
            //num of green
            finalGreen += numTalentMats[i];
        } else if (i >= 2 && i <= 5) {
            finalBlue += numTalentMats[i];
        } else {
            finalPurple += numTalentMats[i];
        }
    }

    const sendData = JSON.stringify({
        finalGreen: finalGreen,
        finalBlue: finalBlue,
        finalPurple: finalPurple
    });

    res.send(sendData);
});

module.exports = router;