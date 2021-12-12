import React from 'react';
import DomainFarm from '../../DomainFarm';
import {farmTalent} from './Data';

function Farming() {
    return (
        <> 
            <DomainFarm {...farmTalent} />
        </>
    );
}

export default Farming;