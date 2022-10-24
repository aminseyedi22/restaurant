import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/pizza'><img src='/images/pizza.png' width={320} height={330} className={styles.menu}></img></Link>
      <img src='/images/drinks.png' width={330} height={300} className={styles.menu}></img>
      <img src='/images/burger.png' width={330} height={300} className={styles.menu}></img>
    </div >
  )
}
