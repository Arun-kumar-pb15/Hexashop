import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from '../sinnepts/Cards'
import { Link } from 'react-router-dom';

const Kids = () => {
    const slidData = [
        {
            id: 211,
            photo: "kids1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 212,
            photo: "kids2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 213,
            photo: "kids3.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 214,
            photo: "kids4.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 215,
            photo: "kids5.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 216,
            photo: "kids6.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },

    ]
    return (
        <>
            <div className='container'>
                <div className='SecMain'>
                    <div className="SecContant">
                        <h1 className='Latest-Class'>Kid’s Latest</h1>
                        <p className="SecPara">Lorem Ipsum is simply dummy text of the printingand typesetting industry.</p>

                        <div className="box-div">
                            <Swiper
                                modules={[Navigation, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation={false}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                loop={true}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                            >
                                {slidData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <Link to={`/ProductsDetails/${item.id}`} className="link-dactration">
                                            <Cards data={item} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kids