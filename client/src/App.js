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
import TalentCalculator from './components/pages/TalentCalculator/TalentCalculator';
import dotenv from 'dotenv';
import axios from 'axios';

require('dotenv').config();
const API_Link = process.env.REACT_APP_API_LINK;

const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

let API_ORIGIN = '';

if (LOCAL_DOMAINS.includes(window.location.hostname)) {
    //Local server
    API_ORIGIN = 'http://localhost:5000';
} else {
    API_ORIGIN = API_Link;
}

export {API_ORIGIN};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        axios.get(API_ORIGIN + '/wakeHeroku')
            .then(res => res.data)
            .catch(err => err);
    }

    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<ExpCalculator />} />
                    <Route path='/farm' element={<Farming />} />
                    <Route path='/talent-calculator' element={<TalentCalculator />} />
                    <Route path='/resin-material-calculator' element={<ResinMaterialCalculator />} />
                    <Route path='/about' element={<About />} />
                    
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;