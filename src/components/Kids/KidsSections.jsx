import React from 'react'
import KidsSec1 from './KidsSec1'
import WomenSec3 from '../Women\'s/WomenSec3'
import KidsSec2 from './KidsSec2'
import KidsSec3 from './KidsSec3'

const KidsSections = () => {
    return (
        <>
            <div className="AllSectionBg">
                <KidsSec1 />
                <WomenSec3 className="margin-class"/>
                <KidsSec2 />
                <KidsSec1 className='margin-class' />
                <KidsSec3 />

            </div>
        </>
    )
}

export default KidsSections