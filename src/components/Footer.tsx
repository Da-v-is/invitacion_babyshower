import styles from './Footer.module.css'
interface FooterProps { message: string }
export default function Footer({ message }: FooterProps) {
  return <footer className={styles.footer}><span className={styles.heart}>♡</span><p>{message}</p><a href="#inicio">Volver al inicio ↑</a></footer>
}
