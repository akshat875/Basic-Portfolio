import styles from './ProjectsStyles.module.css';
import ToDo from '../../assets/ToDo.png';
import Restaurant from '../../assets/Restaurant.jpg';
import Tour from '../../assets/Tour.jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ToDo}
          link="https://to-do-gules-xi.vercel.app/"
          h3="To-Do"
          p="Task App"
        />
        <ProjectCard
          src={Restaurant}
          link="https://foodstore-omega.vercel.app/"
          h3="Food Store"
          p="Restaurants"
        />
        <ProjectCard
          src={Tour}
          link="https://tour-iota-lime.vercel.app/"
          h3="Tour"
          p="Travel Planer"
        />
        <ProjectCard
          src={fitLift}
          link="#"
          h3=" IN PROCESS"
          p=" - - - - "
        />
      </div>
    </section>
  );
}

export default Projects;
