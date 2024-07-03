import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'

const WomenSec2 = () => {
    const WomensData2 = [
        {
            id: 1,
            photo: "women7.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2,
            photo: "women8.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3,
            photo: "women9.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4,
            photo: "women10.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5,
            photo: "women11.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6,
            photo: "women12.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className="container">
                <div className='Sec2-container'>
                    <h1 className='WomenSectionContaint'>Featured</h1>
                    <div className='PicBoxs'>
                        {WomensData2.map((item, index) => (
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

export default WomenSec2