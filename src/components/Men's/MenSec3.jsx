import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'

const MenSec3 = () => {
    const MensData3 = [
        {
            id: 1,
            photo: "MenCap.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2,
            photo: "MenNatural.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3,
            photo: "picTwo.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4,
            photo: "picOne.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5,
            photo: "picTwo.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6,
            photo: "picThree.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className="container">
                <div className='Sec1-container'>
                    <h1 className='MenSectionContaint'>Casual</h1>
                    <div className='PicBoxs'>
                        {MensData3.map((item, index) => (
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

export default MenSec3