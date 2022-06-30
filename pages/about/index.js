import Header from '../../components/Header/Index';
import styles from './about.module.scss';

// about.module.scss';

const aboutUs = () => {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.about__hero}>
        <div className="container">
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
        <p>About</p>
      </div>
    </div>
  );
};

export default aboutUs;
