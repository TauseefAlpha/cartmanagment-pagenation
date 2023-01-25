import React from 'react'
import { useCart } from "react-use-cart";


// const bt={
//   border:'2px solid red',
//   backgroundColor:'grey',
//   color:'white'    
// }

function Card(props) {
    const { addItem } = useCart();

    console.log("you selected item",props.items)

  return (
    <>
      

       {/* <div className="col-md-5 col-lg-4 pe-1 mb-1 my-2 hvr-bounce-out"  > */}
                    <div className="card " id="cardd" style={{width:'20rem'}}>
                        <div className="card-header">
                            <img src={props.imgs} alt="" style={{ height:'15rem', width:'15rem',border:'3px solid grey' }}
                                className="card-img-top h-5" />
                        </div>
                        <div className="card-body bg-light ">
                            <h3 className="card-title text-Dark" style={{ textAlign: 'center',fontFamily: 'Uncial Antiqua',fontSize: '25px' }}>{props.title}</h3>
                            {/* <p className="card -text p-1" >{props.description}
                            </p> */}
                            <p id='price' className="card-text text-shadow"> <b style={{fontFamily: 'Trirong',fontSize: '15px'}}>price:</b><span
                                className="text-success">{props.price}</span>
                            </p>
                             <div className='d-grid'>
                             <button className='btn text-light'style={{background:'rgb(25, 0, 47)'}} onClick={()=>addItem(props.items)}> Add To Cart</button>
                             </div>
                            {/* <a href="/" target='_blank' rel="noreferrer" className="btn btncustom ">ODER NOW</a> */}

                        </div>
                    </div>
                {/* </div> */}

    </>
  )
}

export default Card
