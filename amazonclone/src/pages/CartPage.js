import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import axios from 'axios'
import "./Cartpage.css"
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../STORE/Slices/cartSlice';


function CartPage() {



    const cartProducts = useSelector(state => state.cart.cart)
    const [totalPrice, settotalPrice] = useState(0)
    useEffect(() => {
        if (cartProducts.length > 0) {
            settotalPrice(cartProducts.reduce((total, ele) => total + ele.productPrice, 0))
        }
        else {
            settotalPrice(0)
        }
    }, [cartProducts])

    const dispatch = useDispatch()
    const handleRemove = (productId) => {
        dispatch(removeCart(productId))

    }



    return (
        <div >
            <Header />
            {/* left  */}
            <div className='cart'>
                <div className='cartData'>
                    {/* top */}
                    <div className='cartNumber'>
                        <h1>number of items in your cart :{cartProducts.length}</h1>
                    </div>
                    {/* bottom */}
                    <div className='cartProducts'>
                        {/* one cart product  */}
                        {
                            cartProducts.map((oneProduct, i) => (
                                <div className='cartProduct' key={oneProduct.productId}>
                                    {/* image  */}
                                    <img src={oneProduct.productImage} alt='err' />
                                    {/* product data  */}
                                    <div className='cartProductData'>
                                        <h1>{oneProduct.productName}</h1>
                                        <h2>{oneProduct.productName}</h2>
                                        <h3>{oneProduct.productDescription} </h3>
                                        <h4> ${oneProduct.productPrice}</h4>
                                        <Rating name="half-rating-read" defaultValue={oneProduct.productRating} precision={0.25} readOnly />
                                    </div>
                                    {/* remove data  */}
                                    <button onClick={() => handleRemove(oneProduct.productId)}>Remove</button>
                                </div>
                            ))
                        }

                    </div>
                </div>
                {/* right  */}
                <div className='amount'>
                    <h2>Total amount</h2>
                    <h1> ${totalPrice.toFixed(2)}</h1>
                    <button>checkout</button>
                </div>
            </div>
        </div >


    )
}

export default CartPage
