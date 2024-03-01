'use client'
import { useEffect } from 'react'
import ClickMeBtn from '../components/clickMe'
import AddToCart from '../components/AddToCart'
import DataLayerDemo from '../components/DataLayerDemo'

const Home = () => {
    useEffect(() => {
        document.cookie = "homepage=abc; path=/home";
    }, [])
    return <>
        <h1>Home page</h1>
        <ClickMeBtn />
        <AddToCart />
        <DataLayerDemo />
    </>
}

export default Home