import React, { useEffect, useState } from 'react'
import './OneProduct.css'
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../STORE/Slices/cartSlice';

function OneProduct(props) {

    const { productName, productImage, productPrice, productRating, productBrand, productCategory, productDescription, productId } = props

    const [newText, setnewText] = useState("")
    useEffect(() => {
        if (productDescription.length > 89) {
            setnewText(productDescription.slice(0, 87) + "...")
        }
    }, [productDescription])

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        const oneProduct = {
            productName, productImage, productPrice, productRating, productBrand, productCategory, productDescription, productId
        }
        dispatch(addToCart(oneProduct))
    }

    return (
        
        <div className='oneProduct'>
            {/* cateogery */}
            <p>{productCategory}</p>

            <img src={productImage} alt='productName'></img>

            <h1>{productName}</h1>

            <h2>{productBrand}</h2>

            <h5>{productDescription.length > 89 ? newText : productDescription}</h5>

            <div className='oneProduct_PriceAndRating'>
                <h2>{productPrice}</h2>
                <Rating name="half-rating-read" defaultValue={productRating} precision={0.25} readOnly />

            </div>

            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default OneProduct

