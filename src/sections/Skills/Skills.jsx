import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillGrid}>
        <SkillList src={checkMarkIcon} skill="HTML" level={90} />
        <SkillList src={checkMarkIcon} skill="CSS" level={80} />
        <SkillList src={checkMarkIcon} skill="JavaScript" level={85} />
        <SkillList src={checkMarkIcon} skill="JAVA" level={75} />
        <SkillList src={checkMarkIcon} skill="React" level={80} />
        <SkillList src={checkMarkIcon} skill="SCSS" level={70} />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" level={75} />
        <SkillList src={checkMarkIcon} skill="Redux" level={70} />
        <SkillList src={checkMarkIcon} skill="Git" level={85} />
        <SkillList src={checkMarkIcon} skill="GenerativeAPI" level={60} />
        <SkillList src={checkMarkIcon} skill="Bootstrap" level={80} />
      </div>
    </section>
  );
}

export default Skills;
