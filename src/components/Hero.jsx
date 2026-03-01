import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgText}>QA</div>

      <p className={styles.eyebrow}>QA Engineer &amp; Full-Stack Developer — Open to Opportunities</p>

      <h1 className={styles.name}>
        Boyet P.<br /><em>Peñales</em>
      </h1>

      <p className={styles.title}>Testing the edges. Building the rest.</p>

      <p className={styles.desc}>
        QA Engineer with hands-on experience in Manual, API, Web, and Payment Integration Testing
        for enterprise-scale POS, Inventory, and SaaS platforms. Full-stack background that enables
        faster root-cause analysis and stronger dev collaboration.
      </p>

      <div className={styles.cta}>
        <a href="#work" className={`${styles.btn} ${styles.btnFill}`}>View Projects</a>
        <a href="#contact" className={styles.btn}>Get in Touch</a>
      </div>

      <div className={styles.contacts}>
        <a href="mailto:boyetpenalesemail@gmail.com">boyetpenalesemail@gmail.com</a>
        <a href="tel:+639938420625">+639 938 420 625</a>
        <a href="https://linkedin.com/in/boyetpenales120202" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/LetNear" target="_blank" rel="noreferrer">GitHub / LetNear ↗</a>
      </div>
    </section>
  )
}
