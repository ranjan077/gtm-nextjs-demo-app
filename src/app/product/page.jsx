'use client'
import { useEffect } from 'react'
const Product = () => {
    useEffect(() => {
        document.cookie = "product=xyz; path=/product";
    }, [])
    return <h1>Product page</h1>
}

export default Product