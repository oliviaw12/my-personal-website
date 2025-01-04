// pages/projects/[id].js
import { useRouter } from 'next/router';
import projects from './projectsList';
import Link from 'next/link';

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      {project.image && <img src={project.image} alt={project.title} />}
      <p>{project.content}</p>
      <Link href="/projects"> Back to Projects
      </Link>
    </div>
  );
}
