import Image from 'next/image';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import AboutSidebar from '../../components/Sidebars/AboutSidebar';
import styles from './about.module.scss';

import child from '../../assets/child.png';
import AdvisoryBoard from '../../components/AdvisoryBoard/AdvisoryBoard';

// about.module.scss';

const aboutUs = () => {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.about__hero}>
        <div className={`${styles.hero_text} container`}>
          <h1>contemporary family magazine</h1>
          <p>
            An International Quarterly Publication For Parents and Family
            Professionals Across Disciplines. The Magazine is a tool for family
            professionals , policymakers , child advocates and parents seeking
            to improve child outcomes.
          </p>
          <p>
            Editorial content provides practical thought and insight, and
            helpful, stimulating reviews. Research and journalism, interview and
            opinion are welcome.
          </p>
        </div>
      </div>
      <div className="container">
        <div className={styles.about__top}>
          <div className={styles.main}>
            <h2>Our Audience</h2>
            <div className={styles.texts}>
              <p>
                Contemporary Family Magazine reaches an international audience
                of several thousand readers from across professional, research,
                and academic disciplines. Increasingly, the magazine seeks to be
                a forum for those professionals working to improve child
                outcomes across the globe.{' '}
              </p>
              <p>
                Many of our readers are parents seeking guidance to improve
                their co-parenting relationships, to better advocate for court
                reform and to intervene when parental alienation may be apparent
                in their child custody case.{' '}
              </p>
            </div>
            <h3>Major editorial topics include:</h3>
            <div className={styles.edit_topics}>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
              <div className={styles.edit_topic}>
                <div className={styles.image}>
                  <Image src={child} />
                </div>
                <p>Child Welfare</p>
              </div>
            </div>
          </div>
          <div className={styles.sidebar}>
            <AboutSidebar />
          </div>
        </div>
      </div>

      <div className={styles.about__bottom}>
        <div className={`${styles.hero_text} container`}>
          <h2>EDITORIAL ADVISORY BOARD</h2>
          <AdvisoryBoard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutUs;
