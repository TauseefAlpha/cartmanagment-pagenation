import React, { useState } from 'react'
import BtnControl from './common/BtnControl'
import CardMap from './common/CardMap'
import GradientButton from 'react-linear-gradient-button';
import { useCart } from "react-use-cart";
import Carts from './common/Carts';
import { Link } from 'react-router-dom';


function ShowAllproducts() {
  // const [arrayProduct, setArrayProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const {cartTotal} = useCart();

  const pgs = 6
  return (
    <>


      <CardMap
        nameheading=" TA shopping Store"
        bdcolor='grey'
        nameBtn='cart Detail'
        path='/carts'
        pg={pgs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}

      />
      <div className='text-center'>

        <BtnControl
          pages={pgs}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div style={{borderTop:'3px solid purple', display:'flex',flexDirection:'column'}} className='container' >
        <h1 className='float-end' style={{fontFamily: 'Sofia',fontSize: '30px', fontWeight:'bolder'}}>Total Price: <span style={{ color: 'red' }}>{cartTotal}</span></h1>
      

      <div className='text-center'>
      {/* <button className='butcontrol'></button> */}
      <Link className= 'btn butcontrol b' to="/carts"></Link>
        {/* <GradientButton style={{ float: 'right' }} >Checkout</GradientButton> */}
      </div>
      </div>
    </>

  )
}

export default ShowAllproducts
