import React from 'react';
import { Button } from '../../Button';
import './ResinMaterialCalculator.css';

class ResinMaterialCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentGreenMaterial: '', currentBlueMaterial: '', currentPurpleMaterial: '', calculated: false,
            targetGreenMaterial: '', targetBlueMaterial: '', targetPurpleMaterial: '',
            finalGreenNeeded: 0, finalBlueNeeded: 0, finalPurpleNeeded: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        this.setState({calculated: true});
        event.preventDefault();
        
        let finalGreen = 0;
        let finalBlue = 0;
        let finalPurple = 0;

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
    }

    render() {
        return (
            <>
                <div className='resinmaterial-container'>
                    <div className='resinmaterial-wrapper'>
                        <p className="exp-subtitle">Input the number of resin material you have, and your target resin material number.
                        Calculator will output the number of resin material you still need to farm.</p>

                        <form onSubmit={this.handleSubmit}>
                            <table>
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

                                {/* Target number of resin material*/}

                                <br/>

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

                            </table>

                            <div className='resinmaterial-button'><Button buttonSize='btn--wide' buttonColor='blue'>Calculate</Button></div>
                        </form>

                        {this.state.calculated ? 
                            <div className="calculation-container">
                                <table>
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

                                </table>
                            
                            </div>
                            :
                            null
                        }

                        <div className='resinmaterial-explanation-container'>
                            <h3>How to use:</h3>
                            <li>For example, you have 40 Teachings of Ballad (Green), 5 Guide to Ballad (Blue) and 2 Philosophies of Ballad (Purple).</li>
                            <li>You have calculated you need a total of 10 Teachings of Ballad (Green), 20 Guide to Ballad (Blue) and 12 Philosophies of Ballad (Purple).</li>
                            <li>You want to calculate how many resin materials you still need for each resin material.
                                In the given example, you will need 5 more Guide to Ballad (Blue) and 10 more Philosophies of Ballad (Purple).</li>
                            <li>This calculator works for both Talent and Weapon resin material.</li>
                            <li>Calculation of character's passive (eg. Xingqiu's 25% chance of refunding the same material used) is not taken into account.</li>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default ResinMaterialCalculator;
