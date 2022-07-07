import styles from './Styles.module.scss';
import TeamData from './TeamData';
import { useState } from 'react';
import Image from 'next/image';

//Image Import
import mail from '../../assets/mail.png';
import linkedIn from '../../assets/linkedIn.png';
import Link from 'next/link';

const TeamMembers = () => {
  const [teamData, setTeamData] = useState(TeamData);
  console.log(teamData);

  return (
    <div className={styles.team}>
      {teamData.map((member) => {
        return (
          <div className={styles.team__member} key={member.id}>
            <div className={styles.team__member_img}>
              <Image src={member.image} />
            </div>
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <p>{member.bio}</p>
            <div className={styles.contact}>
              <Link href={member.mail}>
                <Image src={mail} />
              </Link>
              <Link href={member.LinkedIn}>
                <Image src={linkedIn} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
