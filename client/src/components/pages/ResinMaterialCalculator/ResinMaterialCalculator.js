import React from 'react';
import { Button } from '../../Button';
import './ResinMaterialCalculator.css';

class ResinMaterialCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentGreenMaterial: '', currentBlueMaterial: '', currentPurpleMaterial: '', calculated: false,
            targetGreenMaterial: 0, targetBlueMaterial: 0, targetPurpleMaterial: 0
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

    handleSubmit(event) {
        this.setState({calculated: true});
        event.preventDefault();

        //Convert current number of material into number of green material
        let finalNumOfGreenMat = 0;
        let finalNumberOfBlueMat = 0;
        let finalNumberOfPurpleMat = 0;

        finalNumOfGreenMat = parseInt(this.state.currentGreenMaterial);
        finalNumOfGreenMat = parseInt(finalNumOfGreenMat + (this.state.currentBlueMaterial*3));
        finalNumOfGreenMat = parseInt(finalNumOfGreenMat + (this.state.currentPurpleMaterial*3*3));
        
        finalNumberOfBlueMat = Math.floor(finalNumOfGreenMat/3);

        finalNumberOfPurpleMat = Math.floor(finalNumberOfBlueMat/3);

        this.setState({targetGreenMaterial: finalNumOfGreenMat, targetBlueMaterial: finalNumberOfBlueMat, targetPurpleMaterial: finalNumberOfPurpleMat});
    }

    render() {
        return (
            <>
                <div className='resinmaterial-container'>
                    <div className='resinmaterial-wrapper'>
                        <p className="exp-subtitle">Calculate your current number of resin material to get the equivalent of converted material.</p>
                        <p className="exp-subtitle">For example, 3 Green resin material (Teachings of Diligence) is equivalent to 1 Blue resin material (Guide of Diligence).</p>
                        
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tr>
                                <td><label className='resinmaterial-label'>Number of Green Resin Material:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="88" value={this.state.currentGreenMaterial} onChange={this.changeCurrentGreenMaterial.bind(this)} /></td>
                                </tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Number of Blue Resin Material:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="5" value={this.state.currentBlueMaterial} onChange={this.changeCurrentBlueMaterial.bind(this)} /></td>
                                </tr>

                                <tr>
                                <td><label className='resinmaterial-label'>Number of Green Resin Material:</label></td>
                                <td><input className='resinmaterial-input' type="number" placeholder="2" value={this.state.currentPurpleMaterial} onChange={this.changeCurrentPurpleMaterial.bind(this)} /></td>
                                </tr>

                            </table>

                            <div className='resinmaterial-button'><Button buttonSize='btn--wide' buttonColor='blue'>Calculate</Button></div>
                        </form>

                        {this.state.calculated ? 
                            <div className="calculation-container">
                                <table>
                                <tr>
                                    <td className="calculated-label">Equivalent of resin material converted to green:</td>
                                    <td>{this.state.targetGreenMaterial}</td>
                                </tr>

                                <tr>
                                    <td className="calculated-label">Equivalent of resin material converted to blue:</td>
                                    <td>{this.state.targetBlueMaterial}</td>
                                </tr>

                                <tr>
                                    <td className="calculated-label">Equivalent of resin material converted to purple:</td>
                                    <td>{this.state.targetPurpleMaterial}</td>
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

export default ResinMaterialCalculator;
