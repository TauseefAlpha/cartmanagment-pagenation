import React from 'react'
import { CartProvider } from 'react-use-cart'
import CardMap from './common/CardMap'
import Carts from './common/Carts'
import Index1 from './Index1'

function CartProviding() {
    return (
        <div>
          <h1>hello cart</h1>

            <CartProvider>
                <Index1/>
                {/* <CardMap/> */}
                <Carts/> 
            </CartProvider>
        </div>
    )
}

export default CartProviding
