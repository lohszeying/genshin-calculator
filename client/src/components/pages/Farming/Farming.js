import React from 'react'
import DomainFarm from '../../DomainFarm'
import {farmTalent, farmWeapon} from './Data'

function Farming() {
    return (
        <> 
            <DomainFarm {...farmTalent} />
            <DomainFarm {...farmWeapon} />
        </>
    )
}

export default Farming
