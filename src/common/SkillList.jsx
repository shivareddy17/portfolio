import styles from './skills.module.css';
function SkillList({ src, skill }) {
  return (
    <span className={styles.container}>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
