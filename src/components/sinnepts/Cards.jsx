import React from 'react'

const Cards = ({data}) => {
    console.log(data,'this is my ')
    return (
        <>            
                <div className='ImgContainer'>
                    <img src={`/imges/${data?.photo}`} alt={`${data?.photo}`} />
                    <div className='main-containt-div'>
                        <div className='ImgContaint'>
                            <h1 className='ClassicSpring'>{data?.name}</h1>
                            <img src={`/imges/${data?.rank}`} alt={`/imges/${data?.rank}`} />
                        </div>
                        <div className="ImgContaint2">
                            <p>{data?.price}</p>
                            <div className='ImgAsserts'>
                                <img src="/imges/hart.svg" alt="hart.svg" />
                                <img src="/imges/dilver.svg" alt="dilver.svg" />
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default Cards