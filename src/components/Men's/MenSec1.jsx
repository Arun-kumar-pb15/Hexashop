import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../sinnepts/Cards'

const MenSec1 = () => {
    const slidData = [
        { id: 1001, photo: "picOne.png", name: "Classic Spring", rank: "stars-group.svg", price: "$120.00" },
        { id: 1002, photo: "picTwo.png", name: "Classic Spring", rank: "stars-group.svg", price: "$120.00" },
        { id: 1003, photo: "picThree.png", name: "Classic Spring", rank: "stars-group.svg", price: "$120.00" },
        { id: 1004, photo: "picFormal.png", name: "Classic Spring", rank: "stars-group.svg", price: "$120.00" },
        { id: 1005, photo: "picTshart.png", name: "Classic Spring", rank: "stars-group.svg", price: "$120.00" },
        { id: 1006, photo: "picOne.png", name: "Classic Spring", rank: "stars-group.svg", price: "$120.00" },
    ]



    return (
        <div className="container">
            <div className='Sec1-container'>
                <h1 className='MenSectionContaint'>Men’s Latest</h1>
                <div className='PicBoxs'>
                    {slidData.map((item) => (
                        <Fragment key={item.id}>
                            <Link to={`/ProductsDetails/${item.id}`} target='_blank' className="link-dactration">
                                <Cards data={item} />
                            </Link>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenSec1
