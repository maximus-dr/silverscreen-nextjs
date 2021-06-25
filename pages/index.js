import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export async function getStaticProps() {
  const res = await axios('http://localhost:3001/db.json');
  const pageData = await res.data;

  return {
    props: {
      pageData
    }
  }
}

export default function Home(props) {
  console.log(props);

  return (
    <div className={styles.container}>
      <h1>App</h1>
    </div>
  )
}
