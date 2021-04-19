import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ProjectType} from '../../modules/projects/types/projects'
//import {getProjectDetail} from '../../../core/projects/services/getProjectDetail'
import {getProjectDetailFake as getProductDetail} from '../../../core/projects/services/getProjectDetailFake'
import './ProjectDetail.css';


type TParams = { id: string };

const ProjectDetail: React.FC  = () => {

  const { id } = useParams<TParams>();
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    const initProjectDetail = async (id:string) => {
      const project: ProjectType = await getProductDetail(id);
       setProject(project);
    }
    initProjectDetail(id);
  }, []);

  return project && (
    <>
    <section className="ProjectDetail">
      <article>
        <header>
          <h2>{project.title_project}</h2>
          <figure><img src={project.image} alt={project.title_project}/></figure>
        </header>
        <div className="main-content">
          <p>{project.description}</p>
          <p>GITHUB: <a href={project.code_url}>Enlace a GItHub</a></p>
          <p>NETLIFY: <a href={project.live_url}>Enlace a Netlify</a></p>
          <p>STACK: {project.stack}</p>
        </div>
      </article>
    </section>
    </>
  );
};

export {ProjectDetail};