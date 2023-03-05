import './globals.css'
import Link from 'next/link'
import Head from 'next/head'


export const metadata = {
  title: 'Zabby Meat Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css" />
        </Head>
      <body>{children}</body>
<footer>
<script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
<div hidden id="snipcart" data-api-key="MGEwMmZjMmYtOTYyYy00MmJlLTgwOTgtZDVjYjI2ZTBiYzlmNjM4MTI3MDI0Njk1MDk0NzM4" />
</footer>
    </html>
  )
}
