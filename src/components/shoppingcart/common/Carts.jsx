import React from 'react'
import { useCart } from "react-use-cart";
// import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';


function Carts() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();

    if (isEmpty) return <h3 className='text-center'> currently Your cart is empty</h3>;
    return (
        <>

            <div className="container ">
                <h1 className='text-center'>Total unique item <span style={{ color: 'green' }}>{totalUniqueItems}</span></h1>
                <h2 className='text-center'>Total item  <span style={{ color: 'blue' }}>{totalItems}</span> </h2>
                <label><h2 style={{ color: 'red' }}> Total price {cartTotal}</h2></label>
                <center> <button onClick={() => emptyCart()} className='btn btn-warning my-3'><ClearIcon /> Empty Cart</button></center>
                <div className="d-flex justify-content-center">
                    <div className="col-md-10">
                        <table className="table table-hover align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>Images</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Increment/Decrement</th>
                                    <th>Remove Item</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((itm) => {
                                        console.log("selected item", itm)
                                        return (
                                            <tr key={itm.id} className='my-2'>
                                                <td>
                                                    <div className="card" style={{ width: "10rem", height: '10rem', borderRadius: '25%' }}>
                                                        <img src={itm.images[0]} className="card-img-top" style={{ width: "10rem", height: '10rem' }} alt="" />
                                                    </div>
                                                </td>
                                                <td>{itm.title}</td>
                                                <td>{itm.quantity * itm.price}</td>
                                                <td>{itm.quantity}</td>
                                                <td>
                                                    <RemoveCircleIcon style={{ color: 'red' }} onClick={() => updateItemQuantity(itm.id, itm.quantity - 1)} />
                                                    <span style={{ fontSize: '20px' }}> {itm.quantity} </span>

                                                    <AddCircleIcon style={{ color: 'green' }} onClick={() => updateItemQuantity(itm.id, itm.quantity + 1)} />
                                                </td>

                                                <td>
                                                    <button className='btn btn-danger' onClick={() => removeItem(itm.id)}><DeleteOutlineIcon /> Remove Item</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carts
