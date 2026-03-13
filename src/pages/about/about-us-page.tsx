import { Link } from 'react-router';
import styles from './about-us-page.module.scss';
import { Paths } from '../../constants';

export const AboutUsPage = () => (
  <main className={styles.container}>
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Мы делаем управление кадрами <span className={styles.accent}>простым</span>.
      </h1>
      <p className={styles.description}>
        MiniCRM — это компактная CRM-система, созданная для тех, кто ценит свое время. Мы верим, что
        рабочие инструменты не должны отвлекать от самой работы.
      </p>

      <div className={styles.actions}>
        <Link to={Paths.USERS} className={styles.navButton}>
          К списку пользователей →
        </Link>
      </div>
    </section>

    <section className={styles.grid}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Для кого это?</h3>
        <p className={styles.cardText}>
          Для небольших команд и крупных отделов, которым нужен быстрый доступ к данным сотрудников
          без лишней бюрократии.
        </p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Как это работает?</h3>
        <p className={styles.cardText}>
          Все данные хранятся локально и обрабатываются мгновенно. Мы используем передовые
          технологии для обеспечения скорости и стабильности.
        </p>
      </div>
    </section>
  </main>
);
