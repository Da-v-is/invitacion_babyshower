import Character from './Character'
import styles from './CharacterScenes.module.css'

export default function CharacterScenes() {
  return <section className={styles.section} aria-label="Amigos animados de la celebración">
    <div className={styles.friends}>
      <Character className={styles.pooh} src="/animations/personajes/pooh.html" title="Pooh bebé se balancea feliz" />
    </div>
  </section>
}
