import React from 'react';
import { Button } from '../../Button';
import {numTalentMats} from './Data';
import axios from "axios";
import {API_ORIGIN} from '../../../App'

class TalentWeaponCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentNormalAttackLvl: '', currentSkillLvl: '', currentBurstLvl: '', calculated: false,
            targetNormalAttackLvl: '', targetSkillLvl: '', targetBurstLvl: '',
            finalGreenNeeded: 0, finalBlueNeeded: 0, finalPurpleNeeded: 0,
            numTalentMatsNeeded: numTalentMats
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeCurrentNormalAttackLvl(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentNormalAttackLvl: event.target.value})
        }
    }

    changeCurrentSkillLvl(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentSkillLvl: event.target.value})
        }
    }

    changeCurrentBurstLvl(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentBurstLvl: event.target.value})
        }
    }

    changeTargetNormalAttackLvl(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetNormalAttackLvl: event.target.value})
        }
    }

    changeTargetSkillLvl(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetSkillLvl: event.target.value})
        }
    }

    changeTargetBurstLvl(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetBurstLvl: event.target.value})
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = JSON.stringify({
            currentNormalAttackLvl: this.state.currentNormalAttackLvl,
            currentSkillLvl: this.state.currentSkillLvl,
            currentBurstLvl: this.state.currentBurstLvl,
            targetNormalAttackLvl: this.state.targetNormalAttackLvl,
            targetSkillLvl: this.state.targetSkillLvl,
            targetBurstLvl: this.state.targetBurstLvl,
        });

        axios.post(API_ORIGIN + '/talentcalc/calculate', {data})
            .then(res => {
                this.setState({calculated: true, finalGreenNeeded: res.data.finalGreen, finalBlueNeeded: res.data.finalBlue, finalPurpleNeeded: res.data.finalPurple})
            })
            .catch(error => {
                throw error;
        })
    }

    /*handleSubmit(event) {
        this.setState({calculated: true});
        event.preventDefault();
        
        let finalGreen = 0;
        let finalBlue = 0;
        let finalPurple = 0;

        for (var i = parseInt(this.state.currentNormalAttackLvl); i < parseInt(this.state.targetNormalAttackLvl); i++) {
            if (i === 1) {
                //num of green
                finalGreen += this.state.numTalentMatsNeeded[i];
            } else if (i >= 2 && i <= 5) {
                finalBlue += this.state.numTalentMatsNeeded[i];
            } else {
                finalPurple += this.state.numTalentMatsNeeded[i];
            }
        }

        for (var i = parseInt(this.state.currentSkillLvl); i < parseInt(this.state.targetSkillLvl); i++) {
            if (i === 1) {
                //num of green
                finalGreen += this.state.numTalentMatsNeeded[i];
            } else if (i >= 2 && i <= 5) {
                finalBlue += this.state.numTalentMatsNeeded[i];
            } else {
                finalPurple += this.state.numTalentMatsNeeded[i];
            }
        }

        for (var i = parseInt(this.state.currentBurstLvl); i < parseInt(this.state.targetBurstLvl); i++) {
            if (i === 1) {
                //num of green
                finalGreen += this.state.numTalentMatsNeeded[i];
            } else if (i >= 2 && i <= 5) {
                finalBlue += this.state.numTalentMatsNeeded[i];
            } else {
                finalPurple += this.state.numTalentMatsNeeded[i];
            }
        }

        this.setState({finalGreenNeeded: finalGreen, finalBlueNeeded: finalBlue, finalPurpleNeeded: finalPurple});
    } */

    render() {
        return (
            <>
            
            <div className='resinmaterial-container'>
                <div className='resinmaterial-wrapper'>
                    <p className="exp-subtitle">Input your current talent level and your target talent level.
                    Calculator will calculate the number of talent material you still need to farm.</p>

                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                {/* Current talent level*/}
                                <tr>
                                <td><label className='resinmaterial-label'>Current Normal Attack level:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="1" value={this.state.currentNormalAttackLvl} onChange={this.changeCurrentNormalAttackLvl.bind(this)} min="1" max="10" required /></td>
                                </tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Current Skill level:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="1" value={this.state.currentSkillLvl} onChange={this.changeCurrentSkillLvl.bind(this)} min="1" max="10" required /></td>
                                </tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Current Burst level:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="1" value={this.state.currentBurstLvl} onChange={this.changeCurrentBurstLvl.bind(this)} min="1" max="10" required /></td>
                                </tr>

                                {/* Target talent level*/}

                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Target Normal Attack level:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="8" value={this.state.targetGreenMaterial} onChange={this.changeTargetNormalAttackLvl.bind(this)} min="1" max="10" required /></td>
                                </tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Target Skill level:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="6" value={this.state.targetBlueMaterial} onChange={this.changeTargetSkillLvl.bind(this)} min="1" max="10" required /></td>
                                </tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Target Burst level:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="8" value={this.state.targetPurpleMaterial} onChange={this.changeTargetBurstLvl.bind(this)} min="1" max="10" required /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='resinmaterial-button'><Button buttonSize='btn--wide' buttonColor='blue'>Calculate</Button></div>
                    </form>

                    {this.state.calculated ? 
                        <div className="calculation-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="calculated-label">Number of Green talent material you still need:</td>
                                        <td>{this.state.finalGreenNeeded}</td>
                                    </tr>

                                    <tr>
                                        <td className="calculated-label">Number of Blue talent material you still need:</td>
                                        <td>{this.state.finalBlueNeeded}</td>
                                    </tr>

                                    <tr>
                                        <td className="calculated-label">Number of Purple talent material you still need:</td>
                                        <td>{this.state.finalPurpleNeeded}</td>
                                    </tr>
                                </tbody>
                            </table>
                        
                        </div>
                        :
                        null
                    }

                </div>
            </div>
            </>
        );
    }
}

export default TalentWeaponCalculator;
