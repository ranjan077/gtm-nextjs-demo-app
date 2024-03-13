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
        <iframe src="https://gtm-nextjs-thirparty-ap.vercel.app" title='third-party-site'></iframe>
      </nav>
    </>
  )
}
