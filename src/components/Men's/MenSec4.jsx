import React from 'react'
import Button from '../sinnepts/Button'

const MenSec4 = () => {
    return (
        <>
            <div className='none-div'>
                <div className="Sec4Bg">
                    <div className="emptybg"></div>
                    <div className="container">
                        <div className='Sec4Main'>
                            <div className='SecFourBox1'>
                                <img src="/imges/Girl1.png" alt="Girl1.png" />
                                <img src="/imges/BabyWithThaddy.png" alt="BabyWithThaddy.png" />

                            </div>
                            <div className='SecFourBox2'>
                                <h1 className='SecFourContaint'>Kid’s Collection</h1>
                                <p className="paragraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                <p className="paragraph2"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy <span className='impHeading'>text of the printing and typesetting industry. Lorem Ipsum has been the </span>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <Button text="Discover More" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MenSec4