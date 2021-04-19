import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {ProjectType} from '../../types/projects'
//import {getProjects} from '../../../../../core/projects/services/getProjects'
import {getProjectsFake as getProjects} from '../../../../../core/projects/services/getProjectsFake'
import './ProjectList.css';

const ProjectList: React.FC = () => {
  const [projects, setProjects]= useState<ProjectType[]>([]);

  useEffect(() => {
    const initProjects = async () => {
      const projects: ProjectType[] = await getProjects();
      setProjects(projects);
    }
    initProjects();
  }, []);

  return (
    <ul className="ProjectList">
      {
        projects.map((project:ProjectType) => (
          <li key={project.id}>
            <figure><img src={project.image} alt={project.title_project}/></figure>
            <Link to={`/project/${project.id}`}>
              <h2>{project.title_project}</h2>
            </Link>
            <p>DESCRIPTION: {project.description}</p>
            <p>GITHUB: <a href={project.code_url}>Enlace a GItHub</a></p>
            <p>NETLIFY: <a href={project.live_url}>Enlace a Netlify</a></p>
            <p>ID: {project.id}</p>
            <p>STACK: {project.stack}</p>
          </li>
        ))
      }
    </ul>
  );
};

export {ProjectList};







