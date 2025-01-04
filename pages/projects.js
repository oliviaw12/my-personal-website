import Link from 'next/link';
import projects from './/projects/projectsList';
import Footer from '@/components/footer'; // Update the path based on your project structure

export default function Projects() {
    return (
        <main className="projects-page">
            <div className="header">
                <p>
                    I love unraveling complex problems, leveraging technology to bridge gaps, and crafting tech solutions that center around human needs.
                    Whether it's supporting accessible education or improving patient care, I code for the potential technology has to aid and enrich our lives.
                </p>
            </div>
            <div className="devGrid">
                {projects.map((project) =>
                    project.disabled ? (
                        <div key={project.title} className="project-card disabled">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags ? project.tags.join(', ') : 'No tags available'}
                            </div>
                            <img src={project.imageURL} alt={`${project.title} preview`} />
                        </div>
                    ) : (
                        <Link
                            href={`/projects/${encodeURIComponent(project.title)}`}
                            key={project.title}
                            className="project-card"
                        >
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags ? project.tags.join(', ') : 'No tags available'}
                            </div>
                            <img src={project.imageURL} alt={`${project.title} preview`} />
                        </Link>
                    )
                )}
            </div>
            <Footer />
        </main>
    );
}
