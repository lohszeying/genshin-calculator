import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import {FaFire} from 'react-icons/fa';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import './DomainFarm.css';

function DomainFarm({
    typeOfFarm, typeOfMaterialImg, typeOfMaterialLabel, alt, chars
}) {

    return (
        <div>
            <div className="domainfarm__section">
                <div className="domainfarm__wrapper">
                    <h1 className="domainfarm__heading">{typeOfFarm}</h1>
                    <div className="domainfarm__container">
                        
                        <div className="domainfarm__container-card">
                            <div className="domainfarm__container-cardInfo">

                                <h3>Monday/Thursday</h3>

                                <div className="domainfarm__material-img-wrapper">
                                    <img src={typeOfMaterialImg.one[0]} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg.one[1]} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg.one[2]} alt={alt} className="domainfarm__material-img" />
                                </div>

                                <table className="characters">
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.one[0]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.one[0] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.one[1]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.one[1] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.one[2]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.one[2] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="domainfarm__container-card">
                            <div className="domainfarm__container-cardInfo">

                                <h3>Tuesday/Friday</h3>

                                <div className="domainfarm__material-img-wrapper">
                                    <img src={typeOfMaterialImg.two[0]} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg.two[1]} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg.two[2]} alt={alt} className="domainfarm__material-img" />
                                </div>

                                <table className="characters">
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.two[0]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.two[0] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.two[1]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.two[1] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.two[2]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.two[2] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="domainfarm__container-card">
                            <div className="domainfarm__container-cardInfo">

                                <h3>Wednesday/Saturday</h3>

                                <div className="domainfarm__material-img-wrapper">
                                    <img src={typeOfMaterialImg.three[0]} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg.three[1]} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg.three[2]} alt={alt} className="domainfarm__material-img" />
                                </div>

                                <table className="characters">
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.three[0]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.three[0] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.three[1]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.three[1] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="domainfarm__label">{typeOfMaterialLabel.three[2]}</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            { (chars.three[2] || []).map(({src}) => <img src={src} key={src} alt={alt} className="domainfarm__characters-img" />) }
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DomainFarm;