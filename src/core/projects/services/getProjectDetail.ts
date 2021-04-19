import {ProjectType} from '../../../ui/modules/projects/types/projects';

const getProjectDetail = async (id:string): Promise<ProjectType> => {
    const endPoint = `https://miapi.com/projects/${id}.json`;
    const projectResponseObject = await fetch(endPoint);
    const projectData: ProjectType = await projectResponseObject.json();
    return projectData;
}

export {getProjectDetail};