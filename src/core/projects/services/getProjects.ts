import {ProjectType} from '../../../ui/modules/projects/types/projects';

const getProjects = async (): Promise<ProjectType[]> => {
    const endPoint = '';
    const projectsResponseObject = await fetch(endPoint);
    const projectsData: ProjectType[] = await projectsResponseObject.json();
    return projectsData;
}

export {getProjects};