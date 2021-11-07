import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.logo}><span className={styles.title}>Dev</span>Pals</a>
            </Link>
            <div className={styles.menu}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </nav>
    )
}
