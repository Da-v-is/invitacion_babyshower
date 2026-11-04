import { invitation } from '../data/invitation'
import styles from './Location.module.css'
export default function Location() {
  return <section className={styles.section} id="ubicacion">
    <p className="eyebrow">Te esperamos</p><h2 className="section-title">Nos encontramos aquí</h2>
    <p className={styles.address}>{invitation.venue}<br />{invitation.address}</p>
    <a className="button-primary" href={invitation.mapsUrl} target="_blank" rel="noreferrer">Ver ubicación en Google Maps <span aria-hidden="true">↗</span></a>
  </section>
}
