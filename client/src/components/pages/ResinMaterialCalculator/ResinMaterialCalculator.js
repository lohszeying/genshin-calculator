import React from 'react';
import { Button } from '../../Button';
import './ResinMaterialCalculator.css';

class ResinMaterialCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentGreenMaterial: '', currentBlueMaterial: '', currentPurpleMaterial: '', currentGoldMaterial: '', calculated: false,
            targetGreenMaterial: '', targetBlueMaterial: '', targetPurpleMaterial: '', targetGoldMaterial: '',
            finalGreenNeeded: 0, finalBlueNeeded: 0, finalPurpleNeeded: 0, finalGoldNeeded: 0,
            type: 'Talent'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeResinFarmType = this.changeResinFarmType.bind(this);
    }

    changeCurrentGreenMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentGreenMaterial: event.target.value})
        }
    }

    changeCurrentBlueMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentBlueMaterial: event.target.value})
        }
    }

    changeCurrentPurpleMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentPurpleMaterial: event.target.value})
        }
    }

    changeCurrentGoldMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentGoldMaterial: event.target.value})
        }
    }

    changeTargetGreenMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetGreenMaterial: event.target.value})
        }
    }

    changeTargetBlueMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetBlueMaterial: event.target.value})
        }
    }

    changeTargetPurpleMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetPurpleMaterial: event.target.value})
        }
    }

    changeTargetGoldMaterial(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetGoldMaterial: event.target.value})
        }
    }

    changeResinFarmType(event) {
        this.setState({currentGreenMaterial: '', currentBlueMaterial: '', currentPurpleMaterial: '', currentGoldMaterial: '',
                        targetGreenMaterial: '', targetBlueMaterial: '', targetPurpleMaterial: '', targetGoldMaterial: '',
                        calculated: false, type: event.target.value})
    }

    handleSubmit(event) {
        this.setState({calculated: true});
        event.preventDefault();
        
        let finalGreen = 0;
        let finalBlue = 0;
        let finalPurple = 0;
        let finalGold = 0;

        if (this.state.type === "Talent") {

            let finalValue = [0,0,0]; //index 0: green, index1: blue, index2: purple

            //Number of have material - number of material needed
            finalValue[0] = parseInt(this.state.currentGreenMaterial - this.state.targetGreenMaterial);
            finalValue[1] = parseInt(this.state.currentBlueMaterial - this.state.targetBlueMaterial);
            finalValue[2] = parseInt(this.state.currentPurpleMaterial - this.state.targetPurpleMaterial);

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

            this.setState({finalGreenNeeded: finalGreen, finalBlueNeeded: finalBlue, finalPurpleNeeded: finalPurple});
        } else {
            let finalValue = [0,0,0,0]; //index 0: green, index1: blue, index2: purple, index3: gold

            //Number of have material - number of material needed
            finalValue[0] = parseInt(this.state.currentGreenMaterial - this.state.targetGreenMaterial);
            finalValue[1] = parseInt(this.state.currentBlueMaterial - this.state.targetBlueMaterial);
            finalValue[2] = parseInt(this.state.currentPurpleMaterial - this.state.targetPurpleMaterial);
            finalValue[3] = parseInt(this.state.currentGoldMaterial - this.state.targetGoldMaterial);

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

            this.setState({finalGreenNeeded: finalGreen, finalBlueNeeded: finalBlue, finalPurpleNeeded: finalPurple, finalGoldNeeded: finalGold});
        }
    }

    

    render() {
        return (
            <>
                <div className='resinmaterial-container'>
                    <div className='resinmaterial-wrapper'>
                        <p className="exp-subtitle">Input the number of resin material you have, and your target resin material number.
                        Calculator will output the number of resin material you still need to farm.</p>

                        <div onChange={this.changeResinFarmType} className='radio-button-wrapper'>
                            <input type="radio" value="Talent" name="typeOfResinMaterial" defaultChecked /> <div className='radio-button'>Talent</div>
                            <input type="radio" value="Weapon" name="typeOfResinMaterial" /> <div className='radio-button'>Weapon</div>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    {/* Current number of resin material available*/}
                                    <tr>
                                    <td><label className='resinmaterial-label'>Number of Green Resin Material available:</label></td>
                                    <td><input className='resinmaterial-input' type="number" placeholder="40" value={this.state.currentGreenMaterial} onChange={this.changeCurrentGreenMaterial.bind(this)} /></td>
                                    </tr>

                                    <tr>
                                    <td><label className='resinmaterial-label'>Number of Blue Resin Material available:</label></td>
                                    <td><input className='resinmaterial-input' type="number" placeholder="5" value={this.state.currentBlueMaterial} onChange={this.changeCurrentBlueMaterial.bind(this)} /></td>
                                    </tr>

                                    <tr>
                                    <td><label className='resinmaterial-label'>Number of Purple Resin Material available:</label></td>
                                    <td><input className='resinmaterial-input' type="number" placeholder="2" value={this.state.currentPurpleMaterial} onChange={this.changeCurrentPurpleMaterial.bind(this)} /></td>
                                    </tr>

                                    {this.state.type === "Talent" ? null :
                                        <tr>
                                        <td><label className='resinmaterial-label'>Number of Gold Resin Material available:</label></td>
                                        <td><input className='resinmaterial-input' type="number" placeholder="1" value={this.state.currentGoldMaterial} onChange={this.changeCurrentGoldMaterial.bind(this)} /></td>
                                        </tr>
                                    }

                                    {/* Target number of resin material*/}

                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>

                                    <tr>
                                    <td><label className='resinmaterial-label'>Target Number of Green material:</label></td>
                                    <td><input className='resinmaterial-input' type="number" placeholder="10" value={this.state.targetGreenMaterial} onChange={this.changeTargetGreenMaterial.bind(this)} /></td>
                                    </tr>

                                    <tr>
                                    <td><label className='resinmaterial-label'>Target Number of Blue material:</label></td>
                                    <td><input className='resinmaterial-input' type="number" placeholder="20" value={this.state.targetBlueMaterial} onChange={this.changeTargetBlueMaterial.bind(this)} /></td>
                                    </tr>

                                    <tr>
                                    <td><label className='resinmaterial-label'>Target Number of Purple material:</label></td>
                                    <td><input className='resinmaterial-input' type="number" placeholder="12" value={this.state.targetPurpleMaterial} onChange={this.changeTargetPurpleMaterial.bind(this)} /></td>
                                    </tr>

                                    {this.state.type === "Talent" ? null:
                                        <tr>
                                        <td><label className='resinmaterial-label'>Target Number of Gold material:</label></td>
                                        <td><input className='resinmaterial-input' type="number" placeholder="4" value={this.state.targetGoldMaterial} onChange={this.changeTargetGoldMaterial.bind(this)} /></td>
                                        </tr>
                                    }

                                </tbody>

                            </table>

                            <div className='resinmaterial-button'><Button buttonSize='btn--wide' buttonColor='blue'>Calculate</Button></div>
                        </form>

                        {this.state.calculated ? 
                            <div className="calculation-container">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="calculated-label">Number of Green resin material you still need:</td>
                                            <td>{this.state.finalGreenNeeded}</td>
                                        </tr>

                                        <tr>
                                            <td className="calculated-label">Number of Blue resin material you still need:</td>
                                            <td>{this.state.finalBlueNeeded}</td>
                                        </tr>

                                        <tr>
                                            <td className="calculated-label">Number of Purple resin material you still need:</td>
                                            <td>{this.state.finalPurpleNeeded}</td>
                                        </tr>

                                        {this.state.type === "Talent" ? null:
                                            <tr>
                                                <td className="calculated-label">Number of Gold resin material you still need:</td>
                                                <td>{this.state.finalGoldNeeded}</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            
                            </div>
                            :
                            null
                        }

                        <div className='resinmaterial-explanation-container'>
                            {this.state.type === "Talent" ? 
                                <>
                                <h3>How to use:</h3>
                                <li>For example, you have 40 Teachings of Ballad (Green), 5 Guide to Ballad (Blue) and 2 Philosophies of Ballad (Purple).</li>
                                <li>You have calculated you need a total of 10 Teachings of Ballad (Green), 20 Guide to Ballad (Blue) and 12 Philosophies of Ballad (Purple).</li>
                                <li>You want to calculate how many resin materials you still need for each resin material.</li>
                                <li>In the given example, you will need 5 more Guide to Ballad (Blue) and 10 more Philosophies of Ballad (Purple).</li>
                                <li>This calculator works for both Talent and Weapon resin material.</li>
                                <li>Calculation of character's passive (eg. Xingqiu's 25% chance of refunding the same material used) is not taken into account.</li>
                                </>
                            :
                            
                            <>
                                <h3>How to use:</h3>
                                <li>For example, you have 40 Luminous Sands from Guyun (Green), 5 Lustrous Stone from Guyun 
                                    (Blue), 2 Relic from Guyun (Purple) and 1 Divine Body from Guyun (Gold).</li>
                                <li>You have calculated you need a total of 10 Luminous Sands from Guyun (Green), 20 Lustrous Stone from Guyun (Blue), 12 Relic from Guyun (Purple)
                                    and 4 Divine Body from Guyun (Gold).</li>
                                <li>You want to calculate how many resin materials you still need for each resin material.</li>
                                <li>In the given example, you will need 5 more Lustrous Stone from Guyun (Blue), and 10 more Relic from Guyun (Purple)
                                    and 3 more Divine Body from Guyun (Gold).</li>
                                <li>This calculator works for both Talent and Weapon resin material.</li>
                                <li>Calculation of character's passive (eg. Mona's 25% chance of refunding the same material used) is not taken into account.</li>
                                </>
                            }
                                
                            
                            
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default ResinMaterialCalculator;
