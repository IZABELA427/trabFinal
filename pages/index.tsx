import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto SSG</title>
        </Head> 

    <h1>Seja bem vindo</h1>
    <li>Roupas e acessórios de ótima qualidade </li>
    <li>Entrega para todo o país</li>
    <li>Diversas formas de pagamentos</li>
    
    <a href='\products'>Conferir produtos</a>      



      
    </div>
  )
}
