import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

const KidsSec2 = () => {
    const slidData = [
        {
            id: 8001,
            photo: "kids7.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 8002,
            photo: "kids8.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 8003,
            photo: "kids9.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 8004,
            photo: "kids10.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 8005,
            photo: "kids11.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 8006,
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

export default KidsSec2