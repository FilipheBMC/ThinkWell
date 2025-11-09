import React from 'react'
import Visor from './Visor'

interface IVisors {
    bigVisor : string;
    smallVisor: string;
}

const Visors = ({bigVisor,smallVisor} : IVisors) => {
    return (
        <>
            <Visor typeVisor='big' info={bigVisor} />

            <Visor typeVisor='small' info={smallVisor} />
        </>
    )
}

export default Visors