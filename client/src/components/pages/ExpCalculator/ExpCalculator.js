import React from 'react'
import {levelExp} from './Data'
import './ExpCalculator.css'
import { Button } from '../../Button';

class ExpCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {exp: levelExp, currentLevel: '', targetLevel: '', calculated: false,
            herosWits: 0, adventurers: 0, wanderers: 0  
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
        alert('calculated: ' + this.state.calculated);
        //console.log("Current level:" + this.state.currentLevel);
        //alert('A name was submitted: ' + this.state.exp[1]);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className="darkBg">
                    <div className='exp-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label className="exp-input-label">
                        Current Level:
                        <input className="exp-input" type="text" placeholder="20" value={this.state.currentLevel} onChange={this.changeCurrentLevel.bind(this)} />
                        </label>

                        <p/>

                        <label className="exp-input-label">
                        Target Level:
                        <input className="exp-input" type="text" placeholder="80" value={this. state.targetLevel} onChange={this.changeTargetLevel.bind(this)} />
                        </label>
                        
                        <p/>
                        
                        <Button buttonSize='btn--wide' buttonColor='blue'>Submit</Button> 
                    </form>

                    {this.state.calculated ? 
                        <h1>CALCULATED</h1>
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
