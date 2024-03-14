import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '../app/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <script>
            window.dataLayer = window.dataLayer || [];
          </script>

          <script type="text/javascript" src="https://cdn.cookielaw.org/consent/018de5d3-65a9-7207-ab0f-ac3316a94fc4-test/OtAutoBlock.js"></script>
          <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="018de5d3-65a9-7207-ab0f-ac3316a94fc4-test" ></script>
          <script type="text/javascript">
          function OptanonWrapper() { }
          </script>

          <script src="https://gtm-nextjs-thirparty-ap.vercel.app/test.js" ></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M9SNFZVX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />    
      </body>
    </html>
  )
}
