import Image from 'next/image';
import styles from './Styles.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__text}>
          <h2>Welcome to the Contemporary Family Magazine!</h2>
          <h3>GLOBAL RESOURCES FOR EFFECTIVE CO-PARENTING</h3>
          <button className={`${styles.hero__btn} ${styles.hero__btnred}`}>
            Subscribe Now for Just $24.97 Digital
          </button>
          <button className={`${styles.hero__btn} ${styles.hero__btngold}`}>
            ADVERTISE WITH US
          </button>
          <h4>
            Print Subscriptions $69.97 & Premium Digital and Print Just 74.97!
          </h4>
        </div>
        <div className={styles.welcome}>
          <h3>Welcome from our Publisher, Dr. Mark Roseman</h3>
          <div className={styles.welcome__video}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
