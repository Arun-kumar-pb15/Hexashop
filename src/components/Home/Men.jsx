
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Men = () => {
  // Slider Data//

  const slidData = [
    {
      photo: "picOne.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      photo: "picTwo.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      photo: "picThree.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      photo: "picFour.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
      photo: "picFive.png",
      name: "Classic Spring",
      rank: "stars-group.svg",
      price: "$120.00",
    },
    {
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
                autoplay={true}
              >
                {slidData.map((item, index) => (
                  <SwiperSlide>
                    <div key={index} className='ImgContainer'>
                      <img src={`/imges/${item.photo}`} alt={`${index}${item.photo}`} />
                      <div className='main-containt-div'>
                        <div className='ImgContaint'>
                          <h1 className='ClassicSpring'>{item.name}</h1>
                          <img src={`/imges/${item.rank}`} alt={`/imges/${item.rank}`} />
                        </div>
                        <div className="ImgContaint2">
                          <p>{item.price}</p>
                          <div className='ImgAsserts'>
                            <img src="/imges/hart.svg" alt="hart.svg" />
                            <img src="/imges/dilver.svg" alt="dilver.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Men