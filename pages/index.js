import 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.container}>
        <h2>Software</h2>
        <h4>Solution & <span className={styles.design}>Design</span></h4>
        <p>UI UX Design & Back-End Development</p>
        <Link href="/project"><a>Explore Projects</a></Link>
      </section>
    </>
  )
}
