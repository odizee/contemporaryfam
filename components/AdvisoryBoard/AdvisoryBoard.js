import Image from 'next/image';
import styles from './Styles.module.scss';

import advisory_1 from '../../assets/advisory_1.png';
import advisory_2 from '../../assets/advisory_2.png';
import advisory_3 from '../../assets/advisory_3.png';

const AdvisoryBoard = () => {
  return (
    <div className={styles.advisoryboard}>
      <div className={styles.advisoryboard__member}>
        <div className={styles.image}>
          <Image src={advisory_1} />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <h4>Mark D. Roseman, Ph.D.</h4>
            <p>Florida, USA</p>
          </div>
          <div className={styles.mark_bio}>
            <p>
              Dr. Roseman is an expert and international speaker in high
              conflict divorce, parental alienation and child custody. He has
              worked in the coparenting field since 1999 when he served as
              Assistant Director for Child Access Services with the Children’s
              Rights Council in Washington, DC. He worked closely with Attorney
              David L. Levy, co-founder of the CRC to help bring joint custody
              to nearly 30 states.
            </p>
            <p>
              Dr. Roseman is the CEO of the Toby Center for Family Transitions
              which he founded in 2010. Based in Delray Beach, the Toby Center
              has emerged a major provider of supervised visitation services and
              reunification therapy in Florida and Connecticut.
            </p>
            <p>
              As a mediator and consultant with family members enduring social
              and personal stress, Dr. Roseman has found different modalities to
              be most effective in ameliorating these difficulties.
            </p>
            <p>
              Humor frequently peppers his public speaking, trainings, personal
              coaching and presentations. Says Dr. Roseman “if it takes less
              energy to laugh, and it helps, then, “why not!” It couldn’t hurt!”
            </p>
            <a
              href="www.markdavidroseman.com
"
              className={styles.first_a}
            >
              www.markdavidroseman.com
            </a>
            <p>
              Founder/CEO of Preserving Family Ties Media, LLC Publisher,
              Contemporary Family Magazine Family Mediator
            </p>
            <p>
              * Child Custody Expert Former Contributor to Huffington Post
              Online
            </p>
            <p>*Motivational Speaker</p>
            <p>
              * Founder CEO of The Toby Center for Family Transitions, Inc.
              www.thetobycenter.org Author Preserving Family Ties, A Handbook on
              Divorce and Child Custody (WestBow Press, 2018)
            </p>
            <a href="">Mark Roseman c.v.</a>
            <a href="">Mark Roseman Bio</a>
          </div>
        </div>
      </div>
      <div className={styles.advisoryboard__member}>
        <div className={styles.image}>
          <Image src={advisory_2} />
        </div>
        <div className={styles.text}>
          <h3>Advisory Board</h3>
          <div className={styles.title}>
            <h4>Barbara Mehl</h4>
            <p>USA</p>
          </div>
          <p>
            Barbara Mehl a Guardian ad Litem Program attorney in West Palm
            Beach, Florida. She advocates for the best interest of children in
            dependency, whether it be returned to their parents, for needed
            services, or anything else. Barbara was a business communication
            instructor for Palm Beach Community College for more than 10 years,
            and a family mediator/parenting coordinator.{' '}
          </p>
        </div>
      </div>
      <div className={styles.advisoryboard__member}>
        <div className={styles.image}>
          <Image src={advisory_3} />
        </div>
        <div className={styles.text}>
          <h3>Advisory Board</h3>
          <div className={styles.title}>
            <h4>Abe Worenklein, M.Sc., Ph.D.</h4>
            <p>CANADA</p>
          </div>
          <p>
            Abe Worenklein, PHD is a clinical and forensic psychologist in
            private practice in Montreal and a professor at Dawson College; a
            lecturer at Concordia University; and is certified as a family
            mediator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
