import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import {FaFire} from 'react-icons/fa'
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import './DomainFarm.css'

function DomainFarm({
    typeOfFarm, typeOfMaterial, typeOfMaterialImg1, typeOfMaterialImg2, typeOfMaterialImg3, typeOfMaterialImg4, typeOfMaterialImg5, typeOfMaterialImg6, alt, test
}) {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>

        <div>
            <div className="domainfarm__section">
                <div className="domainfarm__wrapper">
                    <h1 className="domainfarm__heading">{typeOfFarm}</h1>
                    <div className="domainfarm__container">
                        
                        <div className="domainfarm__container-card">
                            <div className="domainfarm__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>

                                <h3>Monday/Thursday</h3>
                                <h4>{typeOfMaterial}</h4>

                                <div className="domainfarm__material-img-wrapper">
                                    <img src={typeOfMaterialImg1} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg2} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg3} alt={alt} className="domainfarm__material-img" />
                                </div>

                                <table>
                                    <tr>
                                        <td className="domainfarm__label">Freedom</td>
                                        <td className="domainfarm__character-img-wrapper">
                                            
                                        </td>
                                    </tr>
                                </table>


                                <ul className="domainfarm__container-features">
                                    <li>Freedom: Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia, Traveler</li>
                                    <li>Prosperity: Keqing, Ningguang, Qiqi, Traveler, Xiao</li>
                                    <li>Transience: Kokomi, Thoma, Traveler, Yoimiya</li>
                                </ul>

                            </div>
                        </div>

                        <div className="domainfarm__container-card">
                            <div className="domainfarm__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>

                                <h3>Monday/Thursday</h3>
                                <h4>{typeOfMaterial}</h4>

                                <div className="domainfarm__material-img-wrapper">
                                    <img src={typeOfMaterialImg4} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg5} alt={alt} className="domainfarm__material-img" />
                                    <img src={typeOfMaterialImg6} alt={alt} className="domainfarm__material-img" />
                                </div>

                                <ul className="domainfarm__container-features">
                                    <li>100 Transactions</li>
                                    <li>2% cashback</li>
                                    <li>$1000 Limit</li>
                                </ul>

                            </div>
                        </div>

                        <div className="domainfarm__container-card">
                            <div className="domainfarm__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>

                                <h3>Wednesday/Saturday</h3>
                                <h4>$99.99</h4>
                                <p>per month</p>
                                <ul className="domainfarm__container-features">
                                    <li>100 Transactions</li>
                                    <li>10% cashback</li>
                                    <li>$10000 Limit</li>
                                </ul>

                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose plan</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        </IconContext.Provider>
    )
}

export default DomainFarm
