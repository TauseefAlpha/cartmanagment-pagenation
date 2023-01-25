import Slider from './Slider'
import React from 'react'
import Index1 from './Index1'
import CartProviding from './CartProviding'
import BottomFotter from './BottomFotter'

function Home() {
  return (
    <div>
       <Slider/>
       <Index1/>  
       <BottomFotter/>
       {/* <CartProviding/> */}
    </div>
  )
}

export default Home
