

import "./Mywork.css";
import Projects from "./Projects";

export default function Mywork() {
  return (
    <div className="work" id="work">
      <div className="mywork-heading">
        <h1>My latest work</h1>
      </div>

      <div className="mywork-projects">
        {Projects.map((project) => (
          <div key={project.id} className="project-card">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                className="proj-img"
                alt={project.title}
              />
            </a>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




