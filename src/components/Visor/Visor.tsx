import React from 'react'
import { InfoText, VisorBox } from './styled'
import { IVisor } from '../../types/IVisor';

const Visor: React.FC<IVisor> = ({ typeVisor, info }) => {

    return (
        <VisorBox variant={typeVisor}>
            <InfoText>{info}</InfoText>
        </VisorBox>
    );
};

export default Visor