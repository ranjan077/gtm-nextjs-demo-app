'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const Product = () => {
    useEffect(() => {
        document.cookie = "product=xyz; path=/product";
    }, [])
    return <>
        <h1>Product page</h1>
        <Link href="/">back</Link>
    </>
}

export default Product