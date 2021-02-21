import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohan's List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Do eu ea magna mollit proident incididunt consequat consectetur magna sit est voluptate fugiat.</p>
      </div>
    </>
  )
}
