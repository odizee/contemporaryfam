import React from 'react';
import Footer from '../components/Footer/Index';
import Header from '../components/Header/Index';
import Hero from '../components/Hero/Index';
import SidebarOne from '../components/SidebarOne/Index';
import IssueSlider from '../components/SidebarOne/IssueSlider';
import styles from './styles/homepage.module.scss';
import Image from 'next/image';
import issue1 from '../assets/issue1.png';
import issue2 from '../assets/issue2.png';
import issue3 from '../assets/issue3.png';
import issue4 from '../assets/issue4.png';
import issue5 from '../assets/issue5.png';
import arrow from '../assets/arrow.png';
import thought from '../assets/thought.png';
import access from '../assets/access.png';
import Carousel from '../components/Carousel/Index';

const home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className={styles.content_area_top}>
        <div className={styles.main}>
          <div className={styles.main_top}>
            <div className={styles.main_top__content}>
              <div className={styles.main_top__preview}>
                <h2>Our Issues for 2022</h2>
                <div className={styles.main_top__card}>
                  <div className={styles.card_img}>
                    <Image src={issue1} />
                  </div>
                  <div className={styles.card_content}>
                    <h3>Spring 2022</h3>
                    <h4>Features</h4>
                    <ul>
                      <li>
                        1 - Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Risus praesent vestibulum lorem ipsum dolor sit
                        amet
                      </li>
                      <li>
                        2 - Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Risus praesent vestibulum lorem ipsum dolor sit
                        amet
                      </li>
                    </ul>
                    <a href="#">Preview the issue</a>
                  </div>
                </div>
              </div>
              <div className={styles.main_top__volume}>
                <h2>Our Issues for volume 1 - 2021</h2>
                <div className={styles.vol_issues}>
                  <div className={styles.vol_issue}>
                    <div className={styles.vol_img_wrap}>
                      <Image src={issue2} />
                    </div>
                    <h3>Spring 2021</h3>
                    <a href="#">Preview the issue</a>
                  </div>
                  <div className={styles.vol_issue}>
                    <div className={styles.vol_img_wrap}>
                      <Image src={issue3} />
                    </div>
                    <h3>Summer 2021</h3>
                    <a href="#">Preview the issue</a>
                  </div>
                  <div className={styles.vol_issue}>
                    <div className={styles.vol_img_wrap}>
                      <Image src={issue4} />
                    </div>
                    <h3>Fall 2021</h3>
                    <a href="#">Preview the issue</a>
                  </div>
                  <div className={styles.vol_issue}>
                    <div className={styles.vol_img_wrap}>
                      <Image src={issue5} />
                    </div>
                    <h3>Winter 2021</h3>
                    <a href="#">Preview the issue</a>
                  </div>
                </div>
              </div>
              <div className={styles.main_top__philosophy}>
                <h2>Philosophy</h2>
                <p>
                  Contemporary Family Magazine addresses the many issues
                  affecting family change, adaptation, and resolve for improving
                  child outcomes whether parents separate and divorce, or face
                  cultural, political, and social change in their society. Says
                  our founder, Dr. Mark Roseman, “As we have recently learned
                  through the Covid-19 Pandemic of 2020, change whether
                  predicted or unexpected may play upon and magnify human
                  weaknesses, but it also demonstrates emotional and physical
                  resolved to overcome. So much faced by individuals and
                  institutions in each country challenges us to be more mindful
                  of the waves of change which can damage and also improve
                  social systems.
                </p>
                <p>
                  It is my goal that each issue of Contemporary Family gives
                  evidence of these challenges, guidance for resilience, and
                  knowledge to improve future outcomes for all. Divorce and
                  separation and other life changes bring such trauma to people
                  that life and health is often jeopardized by disappointment,
                  by anger, by fear. It is through time and patience, knowledge
                  and support that individuals may adapt to and lead change.
                </p>
                <p>
                  We are seeking advertisers and sponsors who wish to bring
                  their message of healing, of hope and of joy to those readers
                  who will most immediately be receptive and lead the changes
                  necessary to sustain our lives. These are the readers of
                  Contemporary Family.
                </p>
                <p>
                  Contemporary Family is published by Preserving Family Ties
                  Media, LLC.
                </p>
              </div>
            </div>
            <SidebarOne />
          </div>
        </div>
      </div>
      <div className={styles.main_bottom}>
        <div className={styles.why_contemporary}>
          <h2>WHY CONTEMPORARY FAMILY?</h2>
          <hr />
          <div className={styles.why_contemporary_items}>
            <div className={styles.why_contemporary_item}>
              <div className={styles.img_wrap}>
                <Image src={arrow} />
              </div>
              <h3>Mission</h3>
              <p>
                To bring you, the reader those global resources to improve child
                outcomes, when parents separate.{' '}
              </p>
            </div>
            <div className={styles.why_contemporary_item}>
              <div className={styles.img_wrap}>
                <Image src={thought} />
              </div>
              <h3>Thoughttful</h3>
              <p>
                Contemporary Family is the magazine which family practitioners
                rely on—for sharing findings, best practices, and new approaches
                to treating high conflict child custody.
              </p>
            </div>
            <div className={styles.why_contemporary_item}>
              <div className={styles.img_wrap}>
                <Image src={access} />
              </div>
              <h3>Access</h3>
              <p>
                When you subscribe to digital, print or both, you will have
                regular delivery of groundbreaking news, applied research and
                guidance from the field to improve co-parenting relationships.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <Carousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
