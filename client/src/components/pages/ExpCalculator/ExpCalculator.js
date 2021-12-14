import React from 'react';
import {levelExp} from './Data';
import './ExpCalculator.css';
import { Button } from '../../Button';

class ExpCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {exp: levelExp, currentLevel: '', targetLevel: '', currentEXP: '', calculated: false,
            herosWits: 0, adventurers: 0, wanderers: 0, totalEXP: 0  
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeCurrentEXP(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentEXP: event.target.value})
        }
    }

    changeCurrentLevel(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({currentLevel: event.target.value});
        }
    }

    changeTargetLevel(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({targetLevel: event.target.value});
        }
    }
    
    handleSubmit(event) {

        this.setState({calculated: true});

        event.preventDefault();

        let totalEXPNeeded = 0;

        for (var i = this.state.currentLevel; i < this.state.targetLevel; i++) {
            totalEXPNeeded += this.state.exp[i];
        }

        totalEXPNeeded -= this.state.currentEXP;

        this.setState({totalEXP: totalEXPNeeded});

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

        this.setState({herosWits: numHeroWits, adventurers: numAdventurers, wanderers: numWanderers});
    }

    render() {
        return (
            <>
                <div className='exp-container'>
                    <div className="exp-wrapper">

                        <p className="exp-subtitle">Calculate the EXP material needed for your Genshin character!</p>

                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                    <td><label className='exp-label'>Current EXP:</label></td>
                                    <td><input className="exp-input" type="number" placeholder="1477" value={this.state.currentEXP} onChange={this.changeCurrentEXP.bind(this)} /></td>
                                    </tr>
                                
                                    <tr>
                                    <td><label className='exp-label'>Current Level:</label></td>
                                    <td><input className="exp-input" type="number" placeholder="20" value={this.state.currentLevel} onChange={this.changeCurrentLevel.bind(this)} /></td>
                                    </tr>
                                    
                                    <tr>
                                    <td><label className='exp-label'>Target Level:</label></td>
                                    <td><input className="exp-input" type="number" placeholder="80" value={this.state.targetLevel} onChange={this.changeTargetLevel.bind(this)} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div className='exp-button'><Button buttonSize='btn--wide' buttonColor='blue'>Submit</Button></div>
                            
                        </form>
                        
                        {this.state.calculated ? 
                            <div className="calculation-container">
                                <table>
                                <tr>
                                    <td className="calculated-label">Total EXP needed:</td>
                                    <td>{this.state.totalEXP}</td>
                                </tr>

                                <tr>
                                    <td className="calculated-label">Total Hero's Wits needed:</td>
                                    <td>{this.state.herosWits}</td>
                                </tr>

                                <tr>
                                    <td className="calculated-label">Total Adventurers needed:</td>
                                    <td>{this.state.adventurers}</td>
                                </tr>

                                <tr>
                                    <td className="calculated-label">Total Wanderers needed:</td>
                                    <td>{this.state.wanderers}</td>
                                </tr>

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

export default ExpCalculator;