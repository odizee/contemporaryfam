import styles from './Styles.module.scss';
import Image from 'next/image';
import be_a_sub from '../../assets/be-a-sub.png';
import IssueSlider from './IssueSlider';

const SidebarOne = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.issue_slides}>
        <div className={styles.issue_slides__text}>
          <h3>Last issues</h3>
          <a href="#">see all</a>
        </div>
        <IssueSlider />
      </div>

      <div className={styles.be_next}>
        <h3>Be in the next issue</h3>
        <p>
          Want to be included in the next issue? Check out our Submission
          Guidelines before filling out the form.
        </p>
        <button>Learn More</button>
      </div>
      <div className={styles.subscriber}>
        <h3>
          Become a subscriber and enjoy unlimited access to all of our Issues
          and More !
        </h3>
        <Image src={be_a_sub} />
        <button>Subscribe</button>
      </div>
      <div className={styles.support}>
        <h3>PLEASE CONSIDER SUPPORTING US</h3>
        <button>SUPPORT US</button>
      </div>
    </aside>
  );
};

export default SidebarOne;
