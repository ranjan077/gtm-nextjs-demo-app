import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Landing() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
