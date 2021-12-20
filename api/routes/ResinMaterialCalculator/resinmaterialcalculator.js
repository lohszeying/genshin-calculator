var express = require('express');
var router = express.Router();

router.post('/calculate', function(req, res) {
    const dataReceived = JSON.parse(req.body.data);

    let finalGreen = 0;
    let finalBlue = 0;
    let finalPurple = 0;
    let finalGold = 0;

    if (dataReceived.type === "Talent") {

        let finalValue = [0,0,0]; //index 0: green, index1: blue, index2: purple

        //Number of have material - number of material needed
        finalValue[0] = parseInt(dataReceived.currentGreenMaterial - dataReceived.targetGreenMaterial);
        finalValue[1] = parseInt(dataReceived.currentBlueMaterial - dataReceived.targetBlueMaterial);
        finalValue[2] = parseInt(dataReceived.currentPurpleMaterial - dataReceived.targetPurpleMaterial);

        for (var i = 0; i < finalValue.length; i++) {
            if (finalValue[i] >= 0) {
                if (i === 0 || i === 1) { //If green or blue
                    //Calculate number of blue leftover (converted from green)
                    let leftover = Math.floor(finalValue[i]/3);
                    finalValue[i+1] = finalValue[i+1] + leftover;
                }
            } else {
                if (i === 0) {
                    finalGreen = Math.abs(finalValue[0]);
                } else if (i === 1) {
                    finalBlue = Math.abs(finalValue[1]);
                } else {
                    finalPurple = Math.abs(finalValue[2]);
                }
            }
        }

        const sendData = JSON.stringify({
            finalGreen: finalGreen,
            finalBlue: finalBlue,
            finalPurple: finalPurple
        });
    
        res.send(sendData);
    } else {
        let finalValue = [0,0,0,0]; //index 0: green, index1: blue, index2: purple, index3: gold

        //Number of have material - number of material needed
        finalValue[0] = parseInt(dataReceived.currentGreenMaterial - dataReceived.targetGreenMaterial);
        finalValue[1] = parseInt(dataReceived.currentBlueMaterial - dataReceived.targetBlueMaterial);
        finalValue[2] = parseInt(dataReceived.currentPurpleMaterial - dataReceived.targetPurpleMaterial);
        finalValue[3] = parseInt(dataReceived.currentGoldMaterial - dataReceived.targetGoldMaterial);

        for (var i = 0; i < finalValue.length; i++) {
            if (finalValue[i] >= 0) {
                if (i === 0 || i === 1 || i === 2) { //If green or blue
                    //Calculate number of blue leftover (converted from green)
                    let leftover = Math.floor(finalValue[i]/3);
                    finalValue[i+1] = finalValue[i+1] + leftover;
                }
            } else {
                if (i === 0) {
                    finalGreen = Math.abs(finalValue[0]);
                } else if (i === 1) {
                    finalBlue = Math.abs(finalValue[1]);
                } else if (i === 2) {
                    finalPurple = Math.abs(finalValue[2]);
                } else {
                    finalGold = Math.abs(finalValue[3]);
                }
            }
        }

        const sendData = JSON.stringify({
            finalGreen: finalGreen,
            finalBlue: finalBlue,
            finalPurple: finalPurple,
            finalGold: finalGold
        });
    
        res.send(sendData);
    }
});

module.exports = router;