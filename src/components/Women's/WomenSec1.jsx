import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const WomenSec1 = () => {
    const slidData = [
        {
            id: 4001,
            photo: "women1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4002,
            photo: "women2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4003,
            photo: "women3.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4004,
            photo: "women4.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4005,
            photo: "women5.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4006,
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

export default WomenSec1