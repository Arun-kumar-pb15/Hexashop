import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

const WomenSec2 = () => {
    const slidData = [
        {
            id: 5001,
            photo: "women7.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5002,
            photo: "women8.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5003,
            photo: "women9.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5004,
            photo: "women10.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5005,
            photo: "women11.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5006,
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

export default WomenSec2