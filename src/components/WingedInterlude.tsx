import Character from './Character'
import styles from './WingedInterlude.module.css'
export default function WingedInterlude() {
  return <section className={styles.section} aria-label="Mariposa y abeja animadas">
    <Character className={styles.bee} src="/animations/personajes/abeja.html" title="Abeja que vuela y mueve las alas" />
  </section>
}
