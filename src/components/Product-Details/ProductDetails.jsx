import React from 'react'

const ProductDetails = () => {
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
                </div>
            </div>
        </>
    )
}

export default ProductDetails