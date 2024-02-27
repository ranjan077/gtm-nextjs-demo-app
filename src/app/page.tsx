import Image from 'next/image'
import styles from './page.module.css'
import ClickMeBtn from './components/clickMe'
import AddToCart from './components/AddToCart'
import DataLayerDemo from './components/DataLayerDemo'

export default function Home() {
  return (
    <>
      <h1>Main page</h1>
      <ClickMeBtn />
      <AddToCart />
      <DataLayerDemo />
    </>
  )
}
