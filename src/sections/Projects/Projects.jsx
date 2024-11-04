import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/171352_calculator_icon.png';
import freshBurger from '../../assets/check-list.png';
import hipsster from '../../assets/video_17706102.png'
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/shivareddy17/calculator/tree/main/projects%20web"
          h3="Calculator app"
          p="App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/shivareddy17/todo"
          h3="To-do list"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/shivareddy17/Course-selling-app/tree/master"
          h3="Course selling app"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Challenges app"
          p="challenges app"
        />
      </div>
    </section>
  );
}

export default Projects;
