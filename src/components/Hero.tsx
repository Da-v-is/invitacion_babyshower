import FlappingButterfly from './FlappingButterfly'
import styles from './Hero.module.css'

interface HeroProps { babyName: string; babyPhoto: string; hosts: string; onOpen: () => void; isOpening: boolean }
export default function Hero({ babyName, babyPhoto, hosts, onOpen, isOpening }: HeroProps) {
  return <header className={styles.hero} id="inicio">
    <div className={styles.topline}>Con mucho amor, te invitamos a celebrar</div>
    <div className={styles.photoStage}>
      <div className={styles.photoButterflies} aria-hidden="true">
        <span className={`${styles.butterflyPosition} ${styles.butterflyOne}`}><FlappingButterfly phase={-.1} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflyTwo}`}><FlappingButterfly phase={-.28} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflyThree}`}><FlappingButterfly phase={-.42} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflyFour}`}><FlappingButterfly phase={-.2} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflyFive}`}><FlappingButterfly phase={-.5} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflySix}`}><FlappingButterfly phase={-.36} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflySeven}`}><FlappingButterfly phase={-.14} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflyEight}`}><FlappingButterfly phase={-.62} /></span>
        <span className={`${styles.butterflyPosition} ${styles.butterflyNine}`}><FlappingButterfly phase={-.24} /></span>
      </div>
      <figure className={styles.babyPhoto}>
        <div className={styles.photoWindow}><img src={babyPhoto} alt="Ecografía 3D de la bebé" fetchPriority="high" /></div>
        <figcaption>Nuestra pequeña luz</figcaption>
        <span className={styles.photoSeal} aria-hidden="true">♡</span>
      </figure>
    </div>
    <p className={styles.kicker}>Baby Shower</p>
    <h1 className={styles.name}>{babyName}</h1>
    <p className={styles.host}>Una celebración de <span>{hosts}</span></p>
    <button className={styles.open} onClick={onOpen} disabled={isOpening} type="button">{isOpening ? '¡Vienen las mariposas!' : 'Abrir invitación'} <span aria-hidden="true">↓</span></button>
    <span className={styles.scrollNote}>Desliza para descubrir</span>
  </header>
}


