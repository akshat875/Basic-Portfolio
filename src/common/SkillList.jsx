
import PropTypes from 'prop-types';
import styles from './SkillList.module.css';

function SkillList({ src, skill, level }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt="Skill icon" className={styles.skillIcon} />
      <span className={styles.skillName}>{skill}</span>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${level}%` }}></div>
        </div>
      </div>
    </div>
  );
}

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillList;
