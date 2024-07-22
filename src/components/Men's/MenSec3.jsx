import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { Link } from 'react-router-dom'

const MenSec3 = () => {
    const slidData = [
        {
            id: 3001,
            photo: "MenCap.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3002,
            photo: "MenNatural.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3003,
            photo: "picTwo.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3004,
            photo: "picOne.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3005,
            photo: "picTwo.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3006,
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

export default MenSec3