import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header-div">
                <div className="container">
                    <div className="box-div">
                        <div className="main-div">
                            <img src="/imges/Logo.svg" alt="Logo.svg" />
                            <div className="logo-name">
                                <h1 className='hexashop'>HEXASHOP</h1>
                                <h3 className='online-shopping'>ONLINE SHOPPING</h3>
                            </div>
                        </div>
                        <div className="header-pages">
                            <Link to='/' className='pages-navlink'> Home</Link>
                            <Link to='/MenSections' className='pages-navlink'> Men's</Link>
                            <Link to='/WomenSections' className='pages-navlink'> Women's</Link>
                            <Link to='/KidsSections' className='pages-navlink'>Kid's</Link>
                            <Link to='/AboutUs' className='pages-navlink'>About Us</Link>
                            <Link to='/ContactUs' className='pages-navlink'>Contact Us</Link>                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header