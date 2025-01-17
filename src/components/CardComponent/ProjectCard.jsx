import React from 'react';
import { Buttons } from './Project-button';
import './CardComponent.css';


//gets the project info from project.json file 
export const ProjectCard = ({ project }) => {
  return (
    <div className="projectWrapper">
      <div className='projectContainer'>
        <img className="project-img" src={project.image} height={280} width={280} alt={`Image of project: ${project.name}`} />
        <div className="projectDescription">
          <h2 className="project-title">{project.name}</h2>
          <div className="readmeContent">
            <p>{project.description}</p>
          </div>

          {/* maps over the tags*/}
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="project-buttons">
            <Buttons project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};
