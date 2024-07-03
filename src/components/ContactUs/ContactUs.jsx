import React from 'react'
import Button from '../sinnepts/Button'

const ContactUs = () => {
    return (
        <>
            <div className="GetBg">
                <div className="emptybg"></div>
                <div className="container">
                    <div className='GetMain'>
                        <h1 className='GetInTouch'>Get In Touch</h1>
                        <div className='BotcBox'>
                            <div className="GetBox1">
                                <img src="/imges/PhoneImg.png" className='PhoneImg' alt="PhoneImg.png" />
                                <h1 className='GetHeading'>Talk To Sales</h1>
                                <p className="GetParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                                    n an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book.orem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's st
                                    andard dummy text ever since the 1500s..... </p>

                                    <img src="/imges/ViewAll.svg" alt="ViewAll.svg" />

                            </div>
                            <div className="GetBox1">
                                <img src="/imges/PhoneImg2.png" className='PhoneImg' alt="PhoneImg2.png" />
                                <h1 className='GetHeading'>Contact Customer support</h1>
                                <p className="GetParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                                    n an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book.orem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's st
                                    andard dummy text ever since the 1500s..... </p>

                                    <Button text="Customer Support" className="GetButton" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='WhiteEmpty'></div>

        </>
    )
}

export default ContactUs