import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ExpCalculator from './components/pages/ExpCalculator/ExpCalculator';
import Farming from './components/pages/Farming/Farming';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/About/About';
import ResinMaterialCalculator from './components/pages/ResinMaterialCalculator/ResinMaterialCalculator';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    /*callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    } */

    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<ExpCalculator />} />
                    <Route path='/farm' element={<Farming />} />
                    <Route path='/resin-material-calculator' element={<ResinMaterialCalculator />} />
                    <Route path='/about' element={<About />} />
                    
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;