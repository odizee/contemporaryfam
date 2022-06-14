import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Styles.module.scss';
import logo from '../../assets/logo.png';
import caret from '../../assets/caret.png';
import bars from '../../assets/bars-svgrepo-com.svg';
import times from '../../assets/times-svgrepo-com.svg';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topnav}>
        <div className={styles.logo}>
          <Image src={logo} />
        </div>
        <div className={styles.user}>
          <button className={styles.signup}>Sign Up</button>
          <button className={styles.sub}>Subscribe Now</button>
        </div>
      </div>
      <div className={styles.hr}></div>
      <nav className={styles.navigation}>
        <ul
          className={isMobile ? styles.nav_links_mobile : styles.nav_links}
          // onClick={() => setIsMobile(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
            <Image src={caret} />
          </li>
          <li>
            <a href="#">Magazine</a>
            <Image src={caret} />
            <div className={styles.navigation__dropdown}>
              <ul>
                <li>
                  <a href="#">Magazine</a>
                </li>
                <li>
                  <a href="#">Magazine</a>
                </li>
                <li>
                  <a href="#">Magazine</a>
                </li>
                <li>
                  <a href="#">Magazine</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">News</a>
            <Image src={caret} />
          </li>
          <li>
            <a href="#">Research</a>
            <Image src={caret} />
          </li>
          <li>
            <a href="#">Support Us</a>
            <Image src={caret} />
          </li>
          <li>
            <a href="#">Regional Ambassadors</a>
            <Image src={caret} />
          </li>
          <li>
            <a href="#">Advertise</a>
            <Image src={caret} />
            <div className={styles.navigation__dropdown}>
              <ul>
                <li>
                  <a href="#">Advertise With Us</a>
                </li>
                <li>
                  <a href="#">Advertising Rate Card</a>
                </li>
                <li>
                  <a href="#">Professional Services Directory</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Book Store</a>
            <Image src={caret} />
          </li>
          <div className={styles.mobile_user}>
            <button className={styles.signup}>Sign Up</button>
            <button className={styles.sub}>Subscribe Now</button>
          </div>
        </ul>
      </nav>
      <button
        className={styles.mobile_menu_icon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <Image src={times} /> : <Image src={bars} />}
      </button>
    </header>
  );
};

export default Header;
