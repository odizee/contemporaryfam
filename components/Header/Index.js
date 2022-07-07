import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Styles.module.scss';
import logo from '../../assets/logo.png';
import caret from '../../assets/caret.png';
import bars from '../../assets/bars-svgrepo-com.svg';
import times from '../../assets/times-svgrepo-com.svg';
import Dropdown from './Dropdown';
import Link from 'next/link';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onMouseEnter = (setdropdown) => {
    if (window.innerWidth < 960) {
      setdropdown(false);
    } else {
      setdropdown(true);
    }
  };

  const onMouseLeave = (setdropdown) => {
    if (window.innerWidth < 960) {
      setdropdown(false);
    } else {
      setdropdown(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_wrap}`}>
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
              <a href="about">About Us</a>
              <Image src={caret} />
            </li>
            <li
              onMouseEnter={() => onMouseEnter(setDropdown)}
              onMouseLeave={() => onMouseLeave(setDropdown)}
            >
              <a href="#">Magazine</a>
              <Image src={caret} />
              {dropdown && (
                <ul
                  onClick={handleClick}
                  className={
                    click
                      ? `${styles.dropdown_menu} ${styles.clicked}`
                      : `${styles.dropdown_menu}`
                  }
                >
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="#">Magazine</Link>{' '}
                  </li>
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="/">Magazine</Link>
                  </li>
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="#">Magazine</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => onMouseEnter(setDropdown2)}
              onMouseLeave={() => onMouseLeave(setDropdown2)}
            >
              <a href="/news">News</a>
              <Image src={caret} />
              {dropdown2 && (
                <ul
                  onClick={handleClick}
                  className={
                    click
                      ? `${styles.dropdown_menu} ${styles.clicked}`
                      : `${styles.dropdown_menu}`
                  }
                >
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="#">Events Calendar</Link>{' '}
                  </li>
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="/">Podcasts and Resources</Link>
                    <Image src={caret} />
                    {dropdown && (
                      <ul>
                        <li>
                          <a href="#">Global Podcasts & Resources</a>
                        </li>
                        <li>
                          <a href="#">Online Resources</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="#">Submit News and Manuscripts</Link>
                  </li>
                  <li
                    onClick={() => setClick(false)}
                    className={styles.dropdown_link}
                  >
                    <Link href="#">Professional Services Directory</Link>
                  </li>
                </ul>
              )}
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
      </div>
    </header>
  );
};

export default Header;
