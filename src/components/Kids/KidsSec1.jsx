import React, { Fragment } from 'react'
import Cards from '../sinnepts/Cards'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

const KidsSec1 = (props) => {
    const slidData = [
        {
            id: 7001,
            photo: "kids1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 7002,
            photo: "kids2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 7003,
            photo: "kids3.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 7004,
            photo: "kids4.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 7005,
            photo: "kids5.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 7006,
            photo: "kids6.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className="container">
                <div className={`Sec1-container  ${props?.className}`}>
                    <h1 className='KidsSectionContaint'>Kid’s Latest</h1>
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

export default KidsSec1