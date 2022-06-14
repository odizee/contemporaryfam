import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Styles.module.scss';
import 'swiper/css';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import issue1 from '../../assets/issue1.png';
import issue2 from '../../assets/issue2.png';
import issue3 from '../../assets/issue3.png';

export default function IssueSlider() {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const [paginationRef, setPaginationRef] = useState(null > null);

  return (
    <div className={styles.container}>
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
            <Image src={issue1} />
          </div>
          <p>Spring 2022</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div className={styles.image_wrapper}>
            <Image src={issue2} />
            <p>Spring 2021</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div className={styles.image_wrapper}>
            <Image src={issue3} />
            <p>Summer 2021</p>
          </div>
        </SwiperSlide>
        <div className={`${styles.swiperNavPrev}`} ref={swiperNavPrevRef}></div>
        <div className={`${styles.swiperNavNext}`} ref={swiperNavNextRef}></div>
      </Swiper>
      <div
        ref={(node) => setPaginationRef(node)}
        className={styles.pagination}
      />
    </div>
  );
}
