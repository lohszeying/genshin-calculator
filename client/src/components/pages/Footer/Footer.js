import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {BsFillCalculatorFill} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Genshin Calculator
                </p>
                <p className='footer-subscription-text'>
                    A simple project for making website with React and Express.
                </p>
            </div>
            <div className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/about' className='social-logo'>
                            <BsFillCalculatorFill className='navbar-icon' />
                            About this website
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to={
                                '//github.com/lohszeying/genshin-calculator'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;