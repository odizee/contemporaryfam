import Image from 'next/image';
import React from 'react';
import styles from './Styles.module.scss';
import logo from '../../assets/logo.png';
import caret from '../../assets/caret.png';

const Footer = () => {
  return (
    <div className="container">
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.footer__logo}>
            <Image src={logo} />
          </div>
          <div className={styles.footer__top_details}>
            <div className={styles.footer__details_one}>
              <div className={styles.open}>
                <p>
                  Opening Hours: <span>Monday - Friday 8am - 9pm</span>
                </p>
              </div>
              <div className={styles.disclaimer}>
                <a href="#">Disclaimer</a>
              </div>
              <button>Subscribe Now</button>
            </div>
            <div className={styles.footer__details_two}>
              <h4>New</h4>
              <ul>
                <li>
                  <a href="#">Events Calender</a>
                </li>
                <li>
                  <a href="#">News Briefs</a>
                </li>
                <li>
                  <a href="#">Submit News Briefs</a>
                </li>
                <li>
                  <a href="#">Podcasts & Resources</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__details_three}>
              <h4>Family Research</h4>
              <ul>
                <li>
                  <a href="#">Divorce and Children</a>
                </li>
                <li>
                  <a href="#">Parental Alienation</a>
                </li>
                <h4 className={styles.reg}>Regional Ambassadors</h4>
                <li>
                  <a href="#">Our Regional Ambassadors</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__details_four}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Support Us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Magazine</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.footer__bottom}>
          <p>Enjoy unlimited access to all of our Issues and More !</p>
          <div className={styles.divide}></div>
          <a href="#">Subscribe Now</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
