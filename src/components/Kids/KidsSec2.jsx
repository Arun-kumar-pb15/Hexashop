import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'

const KidsSec2 = () => {
    const kidsData2 = [
        {
            id: 1,
            photo: "kids7.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2,
            photo: "kids8.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3,
            photo: "kids9.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4,
            photo: "kids10.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5,
            photo: "kids11.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6,
            photo: "kids12.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className="container">
                <div className='Sec1-container'>
                    <h1 className='MenSectionContaint'>Featured</h1>
                    <div className='PicBoxs'>
                        {kidsData2.map((item, index) => (
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

export default KidsSec2