import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="FooterBg">
                <div className='container'>
                    <div className='footer-box-div'>
                        <div className='Main-Footer-Div'>
                            <div className="footer-logo-div">
                                <img src="/imges/H-group.svg" alt="" />
                                <div>
                                    <h1 className='hexashop-footer'>HEXASHOP</h1>
                                    <h3 className='online-shopping-footer'>ONLINE SHOPPING</h3>
                                </div>
                            </div>
                            <a href="https://www.google.com/maps/search/+Lahore+Road,+Sheikhupura/@31.6462849,73.7324615,11z/data=!3m1!4b1?entry=ttu"
                                target="_blank" class="intro-div">
                                <p class="intro">Address: <span className='intro_span'>Lahore Road, Sheikhupura</span></p>
                            </a>
                            <a href="#"
                                // target="_blank"
                                class="intro-div">
                                <p class="intro">E-mail: <span className='intro_span'>Example@gmail.com</span></p>
                            </a>
                            <a href="#"
                                // target="_blank"
                                class="intro-div">
                                <p class="intro">Phone: <span className='intro_span'>0092 356 3656210</span></p>
                            </a>
                        </div>
                        <div className='Main-Footer-Div'>
                            <p class="intro">Shopping and Categories</p>
                            <Link to='MenSections ' className='intro_span' target="_blank">
                                <p className='intro_span'>Men’s Shopping</p>
                            </Link>
                            <Link to='WomenSections ' className='intro_span' target="_blank">
                                <p className='intro_span'>Women’s Shopping</p>
                            </Link>
                            <Link to='KidsSections ' className='intro_span' target="_blank">
                                <p className='intro_span'>kid’s Shopping</p>
                            </Link>
                        </div>
                        <div className='Main-Footer-Div'>
                            <p class="intro">Useful Links</p>
                            <Link to='/' className='intro_span' target="_blank">
                                <p className='intro_span'>Homepage</p>
                            </Link>
                            <Link to='AboutUs' className='intro_span' target="_blank">
                                <p className='intro_span'>About Us</p>
                            </Link>
                            <a href="#"
                                // target="_blank"
                                class="intro-div">
                                <p className='intro_span'>Help</p>
                            </a>
                            <Link to='ContactUs' className='intro_span' target="_blank">
                                <p className='intro_span'>Contact Us</p>
                            </Link>

                        </div>
                        <div className='Main-Footer-Div'>
                            <p class="intro">Help & Information</p>
                            <a href="#"
                                // target="_blank"
                                class="intro-div">
                                <p className='intro_span'>FAQ’S</p>
                            </a>
                            <a href="#"
                                // target="_blank"
                                class="intro-div">
                                <p className='intro_span'>Shipping</p>
                            </a>
                            <a href="#"
                                // target="_blank"
                                class="intro-div">
                                <p className='intro_span'>Tracking Id</p>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <div className="FooterBg2">
                <h1 className='Copyright'>Copyright @ 2024 Developer Arun Kumar</h1>

            </div>

        </>
    )
}

export default Footer