import styles from "./HeroStyles.module.css"
import HeroImg from "../../assets/hero-img.png"
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/cv.pdf"
import { useTheme } from '../../common/ThemeContext';
function Hero() {
    const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
   

        <div className={styles.colorModeChanger}>
            <img className={styles.hero} src={HeroImg} alt="Shiva avatar" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode changer" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
    <h1> Shiva Reddy <br />Chintala</h1>
    <h3> Full Stack Developer</h3>
    <span>
        <a className={styles.icons} href="https://x.com/ShivaRe43340070" target="_blank">
        <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a className={styles.icons} href="https://github.com/shivareddy17" target="_blank">
        <img src={githubIcon} alt="github icon" />
        </a>        
        <a className={styles.icons} href="https://www.linkedin.com/in/shiva-reddy-382b51225/" target="_blank">
        <img src={linkedinIcon} alt="linkdin icon" />
        </a>
    </span>
    <p className={styles.discription}>
    Highly motivated and results-oriented Full Stack Developer seeking a challenging position to leverage strong
programming skills in MongoDB, Express.js, React, Node.js, and front-end technologies like HTML, CSS, and JavaScript.
Committed to continuous learning and delivering high-quality work
    </p>
    <a href={CV} download>
        <button className="hover">Resume</button>
    </a>
        </div>
    </section>
  )
}

export default Hero