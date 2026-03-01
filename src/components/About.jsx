import useReveal from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="about">
      <p className={styles.sectionLabel}>About</p>
      <div className={`${styles.inner} reveal`} ref={ref}>
        <div>
          <h2 className={styles.title}>
            Engineer by craft,<br /><em>tester by instinct.</em>
          </h2>
          <div className={styles.text}>
            <p>
              I'm a QA Engineer with a <strong>full-stack development background</strong> — which means I don't
              just find bugs, I understand why they happen and communicate clearly with devs to fix them faster.
            </p>
            <p>
              Currently supporting a large-scale enterprise QSR project at <strong>Alliance Software Inc.</strong>,
              handling multi-store rollouts, master data management, system/product configuration, and third-party
              integration testing across 100+ locations nationwide.
            </p>
            <p>
              My work spans <strong>Manual, API, Web, and Payment Integration Testing</strong>, with strong
              proficiency in JIRA, Postman, and Azure DevOps — and a growing automation skillset in Playwright.
            </p>
            <p>
              When I'm not breaking things on purpose, I'm building them — full-stack apps in Laravel,
              IoT dashboards, and AI-powered systems.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>Currently</p>
            <p className={styles.blockTitle}>Quality Assurance Tester</p>
            <p className={styles.blockSub}>Alliance Software Inc. — Ortigas, Pasig City</p>
            <p className={styles.blockDetail}>August 2025 – Present</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>Education</p>
            <p className={styles.blockTitle}>Camarines Sur Polytechnic Colleges</p>
            <p className={styles.blockSub}>BS Information Technology</p>
            <p className={styles.blockDetail}>2021 – 2025 · Nabua, Camarines Sur</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>Location</p>
            <p className={styles.blockTitle}>Bato, Camarines Sur 4435</p>
            <p className={styles.blockSub}>Philippines</p>
            <p className={styles.blockDetail}>Open to remote &amp; on-site</p>
          </div>
        </div>
      </div>
    </section>
  )
}
