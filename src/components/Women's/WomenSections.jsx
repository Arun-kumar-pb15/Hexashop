import React from 'react'
import WomenSec1 from './WomenSec1'
import WomenSec2 from './WomenSec2'
import WomenSec3 from './WomenSec3'
import WomenSec4 from './WomenSec4'
import SocialMedia from '../Home/SocialMedia'

const WomenSections = () => {
    return (
        <>
            <div className='AllSectionBg'>
                <WomenSec1 />
                <WomenSec2 />
                <WomenSec3 />
                <WomenSec4 />
                <SocialMedia />
            </div>

        </>
    )
}

export default WomenSections