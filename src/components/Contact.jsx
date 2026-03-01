import useReveal from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="contact">
      <p className={styles.sectionLabel}>Contact</p>
      <div className={`${styles.wrap} reveal`} ref={ref}>
        <h2 className={styles.title}>Let's work<br />together.</h2>
        <p>
          Open to QA Engineer, full-stack developer, or hybrid roles. Whether you need rigorous
          testing, clean builds, or both — I'd love to hear from you.
        </p>
        <div className={styles.links}>
          <a href="mailto:boyetpenalesemail@gmail.com" className={`${styles.btn} ${styles.btnFill}`}>
            Send an Email
          </a>
          <a href="https://linkedin.com/in/boyetpenales120202" target="_blank" rel="noreferrer" className={styles.btn}>
            LinkedIn ↗
          </a>
          <a href="https://github.com/LetNear" target="_blank" rel="noreferrer" className={styles.btn}>
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
