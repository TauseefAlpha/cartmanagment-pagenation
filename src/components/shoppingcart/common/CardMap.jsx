import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { useCart } from "react-use-cart";



function CardMap(props) {
    const [arrayProduct, setArrayProducts] = useState([])
    const [sval, setSval] = useState()
    // const[Fil,setFil]=useState([])


    const {
        totalItems,
        cartTotal,
    } = useCart();


    const pageSize = props.pg;
    const pages = Math.ceil((arrayProduct.length) / pageSize)
    //  console.log("pages for mobile Item", pages)
    const arrayD = arrayProduct.slice(((props.currentPage - 1) * pageSize), (props.currentPage * pageSize))
    console.log("array data slice", arrayD)

    useEffect(() => {
        fetchHandel()
    }, [])

    const fetchHandel = async () => {
        const result = await fetch("https://dummyjson.com/products")
        const data = await result.json()
        setArrayProducts(data.products)
    }

const filterItem=()=>{
    console.log("filter item",sval)

    const updatedlist=arrayProduct.filter((val)=>{

        return val.category===sval
    })
 console.log("filtervalue",updatedlist)

}


    return (
        <>
            <div className='container mt-3' style={{display:`${props.search}`}}>
                <div class="input-group"  >
                    <div class="form-outline">
                        <input id="search-input" type="search" class="form-control" placeholder='search' value={sval}  onChange={(e)=>setSval(e.target.value)}/>
                    </div>
                    <button id="search-button" type="button" onClick={()=>filterItem()} class="btn btn-warning" style={{ height: '38px' }}>
                        <i class="fas fa-search" ></i>
                    </button>
                </div>
            </div>
            <h1 className='text-center my-5' style={{ fontFamily: 'Trirong', fontSize: '35px', fontWeight: 'bolder' }}>{props.nameheading}</h1>
            <div className="container">
                <div className="container">
                    <div style={{ borderBottom: `3px solid ${props.bdcolor}` }}>  <Link to="/carts"><i class="fa fa-shopping-cart" style={{ fontSize: '48px', color: 'purple', float: "right", position: 'relative', left: '3px', top: '-44px', right: '-26px' }} > <p style={{ color: 'red', fontSize: '30px', position: 'relative', right: '-26px', top: '-57px' }}>{totalItems}</p></i></Link></div>
                </div>
                <div className='row ms-2 d-flex justify-content-center' >
                    {
                        arrayD.map((itm, index) => {
                            return (
                                <div className='col-md-6 col-lg-4 pe-1 mb-1 gy-4 '>
                                    <Card
                                        key={itm.id}
                                        title={itm.title}
                                        imgs={itm.images[0]}
                                        price={itm.price}
                                        description={itm.description}
                                        items={itm}
                                    />
                                </div>
                            )
                        })
                    }


                </div>
                <div className='text-center my-4'> <Link class="btn btn-secondary" to={props.path} >{props.nameBtn}</Link></div>

            </div>

        </>
    )
}

export default CardMap
