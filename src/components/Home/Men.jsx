
import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import Cards from '../sinnepts/Cards';
const Men = () => {
  // Slider Data//

  const slidData = [
    {
      id: 1,
      photo: "picOne.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      id: 2,
      photo: "picTwo.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      id: 3,
      photo: "picThree.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      id: 4,
      photo: "picFour.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      id: 5,
      photo: "picFive.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      id: 6,
      photo: "picSix.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
  ]
  console.log(slidData);
  return (
    <>
      <div className='container'>
        <div className='SecMain'>
          <div className="SecContant">
            <h1 className='Latest-Class'>Men’s Latest</h1>
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
                      <Link to={`/ProductsDetails/${slidData.id}`} className="link-dactration" target='_blank' >
                        <Cards data={item} />
                      </Link>
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

export default Men