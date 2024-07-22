import React from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay, } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const ProductDetails = () => {
    const { productId } = useParams()

    const slidData = [
        { id: 1, name: "Classic Spring", price: "$120.00", images: ["picOne.png", "picTwo.png", "picThree.png", "picFour.png", "picFive.png", "picSix.png"] },
        { id: 2, name: "Classic Spring", price: "$120.00", images: ["picTwo.png", "picOne.png", "picThree.png", "picFour.png", "picFive.png", "picSix.png"] },
        { id: 3, name: "Classic Spring", price: "$120.00", images: ["picThree.png", "picOne.png", "picTwo.png", "picFour.png", "picFive.png", "picSix.png"] },
        { id: 4, name: "Classic Spring", price: "$120.00", images: ["picFour.png", "picOne.png", "picTwo.png", "picThree.png", "picFive.png", "picSix.png"] },
        { id: 5, name: "Classic Spring", price: "$120.00", images: ["picFive.png", "picOne.png", "picTwo.png", "picThree.png", "picFour.png", "picSix.png"] },
        { id: 6, name: "Classic Spring", price: "$120.00", images: ["picSix.png", "picOne.png", "picTwo.png", "picThree.png", "picFour.png", "picFive.png"] },

        { id: 111, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women1.png", "women2.png", "women3.png", "women1.png", "women2.png", "women3.png",] },
        { id: 112, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women2.png", "women1.png", "women2.png", "women3.png", "women1.png", "women3.png",] },
        { id: 113, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women3.png", "women1.png", "women2.png", "women3.png", "women1.png", "women2.png",] },
        { id: 114, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women1.png", "women2.png", "women3.png", "women1.png", "women2.png", "women3.png",] },
        { id: 115, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women2.png", "women1.png", "women3.png", "women1.png", "women2.png", "women3.png",] },
        { id: 116, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women3.png", "women1.png", "women2.png", "women3.png", "women1.png", "women2.png",] },

        { id: 211, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids1.png", "kids2.png", "kids3.png", "kids4.png", "kids5.png", "kids6.png",] },
        { id: 212, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids2.png", "kids1.png", "kids3.png", "kids4.png", "kids5.png", "kids6.png",] },
        { id: 213, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids3.png", "kids1.png", "kids2.png", "kids4.png", "kids5.png", "kids6.png",] },
        { id: 214, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids4.png", "kids1.png", "kids2.png", "kids3.png", "kids5.png", "kids6.png",] },
        { id: 215, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids5.png", "kids1.png", "kids2.png", "kids3.png", "kids4.png", "kids6.png",] },
        { id: 216, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids6.png", "kids1.png", "kids2.png", "kids3.png", "kids4.png", "kids5.png",] },

        { id: 1001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picOne.png", "picTwo.png", "picThree.png", "picFormal.png", "picTshart.png", "picOne.png"] },
        { id: 1002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picTwo.png", "picOne.png", "picThree.png", "picFormal.png", "picTshart.png", "picOne.png"] },
        { id: 1003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picThree.png", "picOne.png", "picTwo.png", "picFormal.png", "picTshart.png", "picOne.png"] },
        { id: 1004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picFormal.png", "picOne.png", "picTwo.png", "picThree.png", "picTshart.png", "picOne.png"] },
        { id: 1005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picTshart.png", "picOne.png", "picTwo.png", "picThree.png", "picFormal.png", "picOne.png"] },
        { id: 1006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picOne.png", "picOne.png", "picTwo.png", "picThree.png", "picFormal.png", "picTshart.png"] },

        { id: 2001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["MenBead.png", "MenSwter.png", "picFive.png", "MenHalf.png", "picTshart.png", "picSix.png"] },
        { id: 2002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["MenSwter.png", "MenBead.png", "picFive.png", "MenHalf.png", "picTshart.png", "picSix.png"] },
        { id: 2003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picFive.png", "MenBead.png", "MenSwter.png", "MenHalf.png", "picTshart.png", "picSix.png"] },
        { id: 2004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["MenHalf.png", "MenBead.png", "MenSwter.png", "picFive.png", "picTshart.png", "picSix.png"] },
        { id: 2005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picTshart.png", "MenBead.png", "MenSwter.png", "picFive.png", "MenHalf.png", "picSix.png"] },
        { id: 2006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picSix.png", "MenBead.png", "MenSwter.png", "picFive.png", "MenHalf.png", "picTshart.png"] },

        { id: 3001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["MenCap.png", "MenNatural.png", "picTwo.png", "picOne.png", "picThree.png",] },
        { id: 3002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["MenNatural.png", "MenCap.png", "picTwo.png", "picOne.png", "picThree.png",] },
        { id: 3003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picTwo.png", "MenCap.png", "MenNatural.png", "picOne.png", "picThree.png",] },
        { id: 3004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picOne.png", "MenCap.png", "MenNatural.png", "picTwo.png", "picThree.png",] },
        { id: 3005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picTwo.png", "MenCap.png", "MenNatural.png", "picOne.png", "picThree.png",] },
        { id: 3006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["picThree.png", "MenCap.png", "MenNatural.png", "picTwo.png", "picOne.png",] },

        { id: 4001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women1.png", "women2.png", "women3.png", "women4.png", "women5.png", "women6.png",] },
        { id: 4002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women2.png", "women1.png", "women3.png", "women4.png", "women5.png", "women6.png",] },
        { id: 4003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women3.png", "women1.png", "women2.png", "women4.png", "women5.png", "women6.png",] },
        { id: 4004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women4.png", "women1.png", "women2.png", "women3.png", "women5.png", "women6.png",] },
        { id: 4005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women5.png", "women1.png", "women2.png", "women3.png", "women4.png", "women6.png",] },
        { id: 4006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women6.png", "women1.png", "women2.png", "women3.png", "women4.png", "women5.png",] },

        { id: 5001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women7.png", "women8.png", "women9.png", "women10.png", "women11.png", "women12.png"] },
        { id: 5002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women8.png", "women7.png", "women9.png", "women10.png", "women11.png", "women12.png"] },
        { id: 5003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women9.png", "women7.png", "women8.png", "women10.png", "women11.png", "women12.png"] },
        { id: 5004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women10.png", "women7.png", "women8.png", "women9.png", "women11.png", "women12.png"] },
        { id: 5005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women11.png", "women7.png", "women8.png", "women9.png", "women10.png", "women12.png"] },
        { id: 5006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women12.png", "women7.png", "women8.png", "women9.png", "women10.png", "women11.png"] },

        { id: 6001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women13.png", "women14.png", "women15.png", "women16.png", "women17.png", "women18.png",] },
        { id: 6002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women14.png", "women13.png", "women15.png", "women16.png", "women17.png", "women18.png",] },
        { id: 6003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women15.png", "women13.png", "women14.png", "women16.png", "women17.png", "women18.png",] },
        { id: 6004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women16.png", "women13.png", "women14.png", "women15.png", "women17.png", "women18.png",] },
        { id: 6005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women17.png", "women13.png", "women14.png", "women15.png", "women16.png", "women18.png",] },
        { id: 6006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["women18.png", "women13.png", "women14.png", "women15.png", "women16.png", "women17.png",] },

        { id: 7001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids1.png", "kids2.png", "kids3.png", "kids4.png", "kids5.png", "kids6.png",] },
        { id: 7002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids2.png", "kids1.png", "kids3.png", "kids4.png", "kids5.png", "kids6.png",] },
        { id: 7003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids3.png", "kids1.png", "kids2.png", "kids4.png", "kids5.png", "kids6.png",] },
        { id: 7004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids4.png", "kids1.png", "kids2.png", "kids3.png", "kids5.png", "kids6.png",] },
        { id: 7005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids5.png", "kids1.png", "kids2.png", "kids3.png", "kids4.png", "kids6.png",] },
        { id: 7006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids6.png", "kids1.png", "kids2.png", "kids3.png", "kids4.png", "kids5.png",] },

        { id: 8001, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids7.png", "kids8.png", "kids9.png", "kids10.png", "kids11.png", "kids12.png",] },
        { id: 8002, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids8.png", "kids7.png", "kids9.png", "kids10.png", "kids11.png", "kids12.png",] },
        { id: 8003, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids9.png", "kids7.png", "kids8.png", "kids10.png", "kids11.png", "kids12.png",] },
        { id: 8004, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids10.png", "kids7.png", "kids8.png", "kids9.png", "kids11.png", "kids12.png",] },
        { id: 8005, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids11.png", "kids7.png", "kids8.png", "kids9.png", "kids10.png", "kids12.png",] },
        { id: 8006, name: "Classic Spring", rank: "stars-group.svg", price: "$120.00", images: ["kids12.png", "kids7.png", "kids8.png", "kids9.png", "kids10.png", "kids11.png",] },
    ]

    const product = slidData.find(p => p.id === parseInt(productId))

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <div className="AllSectionBg">
            <div className="container">
                <div className='product-main'>
                    <h1 className='product-name'>{product.name}</h1>
                    <img src={`/imges/${product.images[0]}`} className='Product-img' alt={product.name} />
                    <div className="product-more">
                        <div className='product-name-box'>
                            <h1 className='product-name2'>{product.name}</h1>
                            <p className='product-price'>{product.price}</p>
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
                        slidesPerView={4}
                        navigation={true}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                    >
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={`/imges/${image}`} className='product-imgs' alt={image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
