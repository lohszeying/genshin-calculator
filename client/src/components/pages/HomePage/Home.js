import React from 'react'
import DomainFarm from '../../DomainFarm';
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree,  homeObjFour} from './Data'
import {farmTalent, farmWeapon} from '../Farming/Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home;