import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

const WomenSec4 = () => {
    const slidData = [
        {
            id: 6001,
            photo: "women13.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6002,
            photo: "women14.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6003,
            photo: "women15.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6004,
            photo: "women16.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6005,
            photo: "women17.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6006,
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
                        {slidData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`/ProductsDetails/${item.id}`} className="link-dactration">
                                    <Cards data={item} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenSec4