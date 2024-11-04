import styles from './navstyle.module.css'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function nav() {
    const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  return (
    <>
    <div>nav</div>
    <div className={styles.colorModeChanger}>
            {/* <img className={styles.hero} src={HeroImg} alt="Shiva avatar" />
            mode */}
            <img className={styles.colorMode} src={themeIcon} alt="color mode changer" onClick={toggleTheme} />
        </div>
        </>
  )
}

export default nav