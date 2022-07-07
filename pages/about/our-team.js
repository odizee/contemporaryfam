import styles from './about.module.scss';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import TeamMembers from './../../components/Misc/TeamMembers';

const ourteam = () => {
  return (
    <div className={styles.ourteam}>
      <Header />
      <div className={styles.ourteam__hero}>
        <div className={`${styles.ourteam__hero_text} container`}>
          <h1>Meet Our Team</h1>
          <p>CONTEMPORARY FAMILY MAGAZINE TEAM</p>
        </div>
      </div>
      <div className={`${styles.ourteam__main} container`}>
        <TeamMembers />
      </div>
      <Footer />
    </div>
  );
};

export default ourteam;
