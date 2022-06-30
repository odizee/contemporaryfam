import Image from 'next/image';
import Footer from '../components/Footer/Index';
import Header from '../components/Header/Index';
import top_image from '../assets/news_top.png';
import styles from './styles/news.module.scss';

const news = () => {
  return (
    <>
      <Header />
      <div className={styles.news}>
        <div className="container">
          <div className={styles.news_heading}>
            <div className={styles.details}>
              <h1>Mark Your Calendars: CFM Calendar of Events</h1>
              <div className={styles.hr}></div>
              <p>
                To post your events, please fill out the form at the bottom of
                this page.
              </p>
              <div className={styles.search}></div>
            </div>
            <div className={styles.image}>
              <Image src={top_image} />
            </div>
          </div>
          <div className={styles.event_body}>
            <div className={styles.event_body__main}></div>
            <div className={styles.event_body__sidebar}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default news;
