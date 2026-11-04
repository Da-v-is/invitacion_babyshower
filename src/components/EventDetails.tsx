import { invitation } from '../data/invitation'
import styles from './EventDetails.module.css'
export default function EventDetails() {
  return <section className={styles.section} id="detalles">
    <p className="eyebrow">Reserva la fecha</p><h2 className="section-title">Un día para compartir</h2>
    <p className={styles.copy}>Nos hace mucha ilusión reunir a quienes queremos para celebrar la llegada de nuestra pequeña.</p>
    <div className={styles.details}>
      <div className={styles.detail}><span className={styles.icon}>♡</span><span className={styles.label}>Cuándo</span><strong>{invitation.dateLabel}</strong><span>{invitation.timeLabel}</span></div>
      <i className={styles.divider} aria-hidden="true" />
      <div className={styles.detail}><span className={styles.icon}>⌂</span><span className={styles.label}>Dónde</span><strong>{invitation.venue}</strong><span>{invitation.address}</span></div>
    </div>
  </section>
}
