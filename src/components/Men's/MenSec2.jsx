import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { Link } from 'react-router-dom'

const MenSec2 = () => {
    const slidData = [
        {
            id: 2001,
            photo: "MenBead.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2002,
            photo: "MenSwter.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2003,
            photo: "picFive.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2004,
            photo: "MenHalf.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2005,
            photo: "picTshart.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2006,
            photo: "picSix.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
    ]
    return (
        <>
            <div className="container">
                <div className='Sec2-container'>
                    <h1 className='MenSectionContaint'>Featured</h1>
                    <div className='PicBoxs'>
                        {slidData.map((item) => (
                            <Fragment key={item.id}>
                                <Link to={`/ProductsDetails/${item.id}`} className="link-dactration">
                                    <Cards data={item} />
                                </Link>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenSec2