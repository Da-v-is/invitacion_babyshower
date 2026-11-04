import { invitation } from '../data/invitation'
import styles from './RSVP.module.css'

function whatsappLink(phone: string, message: string) {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
}

export default function RSVP() {
  const urlMama = whatsappLink(invitation.whatsappNumber, invitation.whatsappMessage)
  const urlPapa = whatsappLink(invitation.whatsappNumber2, invitation.whatsappMessage)
  
  return <section className={styles.section} id="confirmar">
    <div className={styles.flower} aria-hidden="true">✿</div>
    <p className="eyebrow">Tu compañía es nuestro mejor regalo</p><h2 className="section-title">¿Nos acompañas?</h2>
    <p className={styles.copy}>Confírmanos por WhatsApp. ¡Nos encantará celebrar contigo!</p>
    <a className="button-primary" href={urlMama} target="_blank" rel="noreferrer">Confirmar asistencia Mamá<span aria-hidden="true">♡</span></a>
    <a className="button-primary" href={urlPapa} target="_blank" rel="noreferrer">Confirmar asistencia Papá<span aria-hidden="true">♡</span></a>

  </section>
}
