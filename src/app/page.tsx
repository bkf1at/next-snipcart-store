import Head from 'next/head'
import products from 'products.json'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
        <p>
          Zabby Meat LLC&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        {products.map(product => {
          return (
            <div key={product.id} className={styles.card}>
              <a>
                

              <img src={product.image} alt={`Preview of ${product.title}`} />
              <h3>{ product.title }</h3>
              <p>{ product.description }</p>
              <p>${ product.price }</p>
              </a>
              
              <p>
                <button className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}>
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })}
      </div>
    
    </main>
  )
}


