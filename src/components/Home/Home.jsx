import React from 'react'
import Button from '../sinnepts/Button'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Products from './Products'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'


const Home = (props) => {

    console.log(props.cardsData)
    return (
        <>
            <section>
                <div className="container">
                    <div className="main-box">
                        <div className='first-box'>
                            <img src="/imges/bnner-img.png" alt="bnner-img.png" className='bnner-img' />
                            <span className="empty-box"></span>
                            <div className='img-containt'>
                                <h1 className='containt-one'>We Are Hexashop</h1>
                                <p className='discraption'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</p>
                                <Link to='/' >
                                    <Button text='Purchase Now' className="button" />
                                </Link>
                            </div>
                        </div>
                        <div className='cards'>
                            {props.cardsData.map((item, index) => (
                                <div key={index} className='secound-box' >
                                    <img src={`/imges/${item.img}`} alt={`${index}${item.img}`} className='bnner-img-two' />
                                    <span className="empty-box-two"></span>
                                    <div className='img-containt-two'>
                                        <h1 className="containt-two">{item.title}</h1>
                                        <p className="discraption-two">{item.paragraph}</p>
                                        <Button text="Discover More" className="button-two" />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className='SecOneBg'>
                <Men />
                <Women />
                <Kids />
            </div>
            <Products />
            <div className='SecOneBg2'>
                <SocialMedia />
            </div>

        </>
    )
}

export default Home