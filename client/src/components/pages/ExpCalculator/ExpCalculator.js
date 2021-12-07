import React from 'react'
import {levelExp} from './Data'
import './ExpCalculator.css'
import { Button } from '../../Button';
import { MdFollowTheSigns } from 'react-icons/md';

class ExpCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {exp: levelExp, currentLevel: '', targetLevel: '', calculated: false,
            herosWits: 0, adventurers: 0, wanderers: 0, totalEXP: 0  
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeCurrentLevel(event) {
        this.setState({currentLevel: event.target.value});
    }

    changeTargetLevel(event) {
        this.setState({targetLevel: event.target.value});
    }
    
    handleSubmit(event) {
        ///alert('A name was submitted: ' + this.state.targetLevel + ", currentLevel: " + this.state.currentLevel);
        this.setState({calculated: true});

        //alert('calculated: ' + this.state.calculated);
        //console.log("Current level:" + this.state.currentLevel);
        //alert('A name was submitted: ' + this.state.exp[1]);
        event.preventDefault();

        

        let totalEXPNeeded = 0;

        for (var i = this.state.currentLevel; i < this.state.targetLevel; i++) {
            //console.log(this.state.exp[i]);
            totalEXPNeeded += this.state.exp[i];
        }

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
                <div className="darkBg">
                    <div className='exp-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label className="exp-input-label">
                        Current Level: </label>
                        <input className="exp-input" type="text" placeholder="20" value={this.state.currentLevel} onChange={this.changeCurrentLevel.bind(this)} />
                        
                        <p />
                        

                        <label className="exp-input-label">
                        Target Level: </label>
                        <input className="exp-input" type="text" placeholder="80" value={this. state.targetLevel} onChange={this.changeTargetLevel.bind(this)} />
                        
                        <p />
                        <Button buttonSize='btn--wide' buttonColor='blue'>Submit</Button> 
                    </form>

                    {this.state.calculated ? 
                        <div className="calculation-container">
                            <table>
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
        )
    }
}

export default ExpCalculator
