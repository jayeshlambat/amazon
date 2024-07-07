import React, { useEffect, useState } from 'react'
import OneProduct from './OneProduct'

import axios from 'axios'
import CartPage from '../pages/CartPage'


function AllProduct() {
    const [allProduct, setallProduct] = useState(null)
    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then((data) => {
                setallProduct(data.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    //console.log(allProduct);
    return (

        <div className='allProducts'>

            {
                allProduct?.map((product, index) => (
                    <OneProduct
                        key={index}
                        productId={product.id}
                        productName={product.title}
                        productImage={product.images[0]}
                        productPrice={product.price}
                        productRating={product.rating}
                        productBrand={product.brand}
                        productCategory={product.category}
                        productDescription={product.description}
                    />
                ))
            }


        </div>

    )
}

export default AllProduct
