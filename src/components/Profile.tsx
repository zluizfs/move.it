import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://pbs.twimg.com/profile_images/1362074644749107200/3Wnvrf37_400x400.jpg" alt="Luiz Twitter Profile"/>
      <div>
        <strong>Luiz Fernando de Souza</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>

  );
}