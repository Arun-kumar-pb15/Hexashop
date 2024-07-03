import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from '../sinnepts/Cards';


const Women = () => {
    const slidData2 = [
        {
            id: 1,
            photo: "women1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 2,
            photo: "women2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 3,
            photo: "women3.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 4,
            photo: "women1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 5,
            photo: "women2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 6,
            photo: "women3.png",
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
                        <h1 className='Latest-Class'>Women’s Latest</h1>
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
                                autoplay={true}
                            >
                                {slidData2.map((item, index) => (
                                    <Fragment key={`card_${item.id || Date.now() + index}`} >
                                        <SwiperSlide>
                                            <Cards data={item} />
                                        </SwiperSlide>
                                    </Fragment>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Women