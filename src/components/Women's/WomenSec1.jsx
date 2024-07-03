import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'

const WomenSec1 = () => {
    const WomensData1 = [
        {
            id: 1,
            photo: "women1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2,
            photo: "women2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3,
            photo: "women3.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4,
            photo: "women4.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5,
            photo: "women5.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6,
            photo: "women6.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className="container">
                <div className='Sec1-container'>
                    <h1 className='WomenSectionContaint'>Women’s Latest</h1>
                    <div className='PicBoxs'>
                        {WomensData1.map((item, index) => (
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

export default WomenSec1