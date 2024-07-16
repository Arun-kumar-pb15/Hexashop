import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const param = useParams();
    console.log(param,"aalu")
    const ProductImg = [
        {
            images: "picOne.png",
        },
        {
            images: "picTwo.png"
        },
        {
            images: "picThree.png"
        },
        {
            images: "picFour.png"
        },
        {
            images: "picFive.png"
        },
        {
            images: "picSix.png"
        },
        {
            images: "picFormal.png"
        },
        {
            images: "picTshart.png"
        },
        {
            images: "MenBead.png"
        },
        {
            images: "MenSwter.png"
        },
        {
            images: "MenHalf.png"
        },
        {
            images: "MenCap.png"
        },
        {
            images: "MenNatural.png"
        },

    ]


    return (
        <>
            <div className="AllSectionBg">
                <div className="container">
                    <div className='product-main'>
                        <h1 className='product-name'>Classic Spring</h1>
                        <img src="/imges/Union.png" className='Product-img' alt="Union.png" />
                        <div className="product-more">
                            <div className='product-name-box'>
                                <h1 className='product-name2'>Classic Spring</h1>
                                <p className='product-price'>$120.00</p>
                            </div>
                            <div className='product-name-box2'>
                                <img src="/imges/hart.svg" alt="hart.svg" />
                                <img src="/imges/dilver.svg" alt="dilver.svg" />

                            </div>
                        </div>
                        <button className='payment-button'>Proceed with Payment</button>

                    </div>
                    <div className='slider-img-div'>
                        <Swiper
                            modules={[Navigation, A11y, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            navigation={false}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                        >
                            {ProductImg.map((item, index) => (
                                <SwiperSlide>
                                    <div key={index}>
                                        <img src={`/imges/${item.images}`} className='product-imgs' alt={`${index}${item.images}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails