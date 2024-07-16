import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from '../sinnepts/Cards';


const Women = () => {
    const slidData = [
        {
            id: 111,
            photo: "women1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 112,
            photo: "women2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 113,
            photo: "women3.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 114,
            photo: "women1.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 115,
            photo: "women2.png",
            name: "Classic Spring",
            rank: "stars-group.svg",
            price: "$120.00",
        },
        {
            id: 116,
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
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                 }}
                            >
                                {slidData.map((item, index) => (
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