import Image from 'next/image'
import styles from './page.module.css'
import ClickMeBtn from './components/clickMe'

export default function Home() {
  return (
    <>
      <h1>Main page</h1>
      <ClickMeBtn />
    </>
  )
}
