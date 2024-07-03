import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'

const WomenSec4 = () => {
    const MensData4 = [
        {
            id: 1,
            photo: "women13.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2,
            photo: "women14.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3,
            photo: "women15.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4,
            photo: "women16.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5,
            photo: "women17.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6,
            photo: "women18.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className="container">
                <div className='Sec2-container'>
                    <h1 className='MenSectionContaint'>Casual</h1>
                    <div className='PicBoxs'>
                        {MensData4.map((item, index) => (
                            <Fragment key={`card_${item.id || Date.now() + index}`} >
                                <Cards data={item} />
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenSec4