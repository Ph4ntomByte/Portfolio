import { Project } from '@/lib/types';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectCard from './ProjectCard';

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <SectionHeading title="Projects" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={project.priority}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay={`${idx * 100}`}
          >
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;