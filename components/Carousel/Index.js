import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Styles.module.scss';
import 'swiper/css';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';

const Carousel = () => {
  const [paginationRef, setPaginationRef] = useState(null > null);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <Swiper
          modules={[Navigation, EffectFade, Pagination]}
          navigation={{
            prevEl: swiperNavNextRef.current,
            nextEl: swiperNavPrevRef.current,
          }}
          pagination={{
            clickable: true,
            el: paginationRef,
          }}
          speed={800}
          slidesPerView={1}
          loop
          className={styles.myswiper}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.image_wrapper}>
              <Image src={slider1} />
            </div>
            <div className={styles.text_wrapper}>
              <h3>Submit Your News & Events, Research & Story Ideas</h3>
              <p>
                News, event, workshop, or professional training to announce
                including webinar, presentation, award, government policy
                change, new research findings, contact your Regional Ambassador
                in your country. Contemporary Family Submission Guidelines for
                manuscript preparation and submission requirements.{' '}
              </p>
              <button>Learn More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.image_wrapper}>
              <Image src={slider2} />
            </div>
            <div className={styles.text_wrapper}>
              <h3>DO YOU HAVE A STORY TO TELL ?</h3>
              <p>
                Want to share your experience to help others? Submit Your Story,
                Interview, Research, Book Review, Manuscript
              </p>
              <button>SUBMIT NOW!</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.image_wrapper}>
              <Image src={slider3} />
            </div>
            <div className={styles.text_wrapper}>
              <h3>
                RECEIVE OUR MONTHLY NEWSBLOG! Stimulating Advice and Opinion
              </h3>
              <p>
                From specialists in family law, psychology, education, health,
                personal finance, spirituality, and more. Get our free
                newsletter!
              </p>
              <button>SIGN UP FOR OUR NEWSLETTER</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.image_wrapper}>
              <Image src={slider4} />
            </div>
            <div className={styles.text_wrapper}>
              <h3>LEGACY BOOKS</h3>
              <p>
                Do You Have a Story to Tell? Want to share your experiences to
                help others? Let us help. We offer you complete editing.
                Publishing and marketing services with customized packages to
                meet your needs. Parental Alienation From Preserving Family
                Ties, An Authoritative Guide To Understanding Divorce and Child
                Custody, For Parents and Family Professionals (WestBow Press,
                2018)
              </p>
              <button>PUBLISH WITH US</button>
            </div>
          </SwiperSlide>
          <div
            className={`${styles.swiperNavPrev}`}
            ref={swiperNavPrevRef}
          ></div>
          <div
            className={`${styles.swiperNavNext}`}
            ref={swiperNavNextRef}
          ></div>
        </Swiper>
        <div
          ref={(node) => setPaginationRef(node)}
          className={styles.carousel_pagination}
        />
      </div>
    </div>
  );
};

export default Carousel;
