import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import {BsFillCalculatorFill} from 'react-icons/bs';
import { Button } from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    //when resizing screen, want to trigger showButton function
    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <BsFillCalculatorFill className='navbar-icon' />
                        Genshin Calculator
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                EXP Calculator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/farm' className='nav-links' onClick={closeMobileMenu}>
                                Domain Farm Availablility
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/talent-calculator' className='nav-links' onClick={closeMobileMenu}>
                                Talent Calculator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        
                        {/*<li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button> 
                                </Link>
                            ) : (
                                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                    >SIGN UP</Button>
                                </Link>
                            )}
                            </li> */}

                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;