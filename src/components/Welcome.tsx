import Character from './Character'
import styles from './Welcome.module.css'
interface WelcomeProps { message: string }
export default function Welcome({ message }: WelcomeProps) {
  return <section className={`${styles.section} welcome`} id="bienvenida">
    <div className={styles.copy}><p className="eyebrow">Nuestra dulce espera</p><h2 className="section-title">Un nuevo amor<br />está en camino</h2><p>{message}</p></div>
    <Character className={styles.character} src="/animations/personajes/piglet.html" title="Piglet animado con su osito" />
  </section>
}
