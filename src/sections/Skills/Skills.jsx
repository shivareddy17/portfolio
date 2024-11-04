import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import HTML from '../../assets/course-svg/html-1.svg'
import CSS from '../../assets/course-svg/css-3 (1).svg'
import JS from '../../assets/course-svg/logo-javascript.svg'
import node from '../../assets/course-svg/nodejs-3.svg'
import Reactl from '../../assets/course-svg/react-2.svg';
import Java from '../../assets/course-svg/java-4.svg';
import ExpressDark from '../../assets/course-svg/express-109.svg';
import ExpressLight from '../../assets/course-svg/icons8-express-js (1).svg';

import Spring from '../../assets/course-svg/spring-3.svg';
import Mongo from '../../assets/course-svg/mongodb-icon-2.svg';
import Git from '../../assets/course-svg/github-icon-1.svg';
 import VS from '../../assets/course-svg/visual-studio-code-1.svg';
 import Bash from '../../assets/course-svg/bash-1.svg';
// import Java from '../../assets/course-svg/java-4.svg';
// import Java from '../../assets/course-svg/java-4.svg';
// import Java from '../../assets/course-svg/java-4.svg';


import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const Express = theme === 'light' ? ExpressDark : ExpressLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList className={styles.icons} src={HTML} skill="" />
        <SkillList className={styles.icons} src={CSS} skill="" />
        <SkillList className={styles.icons} src={JS} skill="" />
        <SkillList className={styles.icons} src={Java} skill="" />
        <SkillList className={styles.icons} src={node} skill="" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList className={styles.icons} src={Reactl} skill="" />
        <SkillList className={styles.icons} src={Express} skill="" />
        <SkillList className={styles.icons} src={Spring} skill="" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList className={styles.icons} src={Mongo} skill="" />
        <SkillList className={styles.icons} src={VS} skill="" />
        <SkillList className={styles.icons} src={Git} skill="" />
        <SkillList className={styles.icons} src={Bash} skill="" />
      </div>
    </section>
  );
}

export default Skills;
