import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { matrix } from '../data/matrix.js'


export default function Home() {

  const [totalCredits, setTotalCredits] = useState(0);

  const [data, setData] = useState([...matrix.courses]);

  useEffect(() => {
    

  }, [])




  return (
    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

    </>
  )
}
