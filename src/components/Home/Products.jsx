import React from 'react'

const Products = () => {
    return (
        <>
            <div className="container">
                <div className="ProductsMainDiv">
                    <div className="ExploreProductsDiv">
                        <h1 className="Explore">Explore Our Products</h1>
                        <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                        <p className="paragraph"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy <span className='impHeading'>text of the printing and typesetting industry. Lorem Ipsum has been the </span>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>


                        <p className="paragraph">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <span className='impHeading'> standard dummy text ever since the 1500s, when an unknown</span> printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>

                    </div>

                    <div className='ImgContainerDiv'>
                        <div className="ImgBoxDiv">
                            <img src="/imges/Rectangle.png" alt="Rectangle.png" className='Rectangle' />
                            <div className='BoxLeatherBags'>
                                <h1 className='LeatherBags'>Leather Bags</h1>
                                <p className='ShortContaint'>Lorem Ipsum is simply dummy text </p>
                            </div>

                        </div>
                        <img src="/imges/Rectangle2.png" alt="Rectangle2.png" />
                        <img src="/imges/Rectangle3.png" alt="Rectangle3.png" />
                        <div className="ImgBoxDiv">
                            <img src="/imges/Rectangle4.png" alt="Rectangle.png" className='Rectangle4' />
                            <div className='BoxLeatherBags'>
                                <h1 className='DifferentTypes'>Different Types</h1>
                                <p className='ShortContaint'>Lorem Ipsum is simply dummy text </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Products