
import {ProjectType} from '../../../ui/modules/projects/types/projects';
import projects from '../data/projects.json';

const getProjectsFake = (): ProjectType[] => {
   return projects;
 }

export {getProjectsFake};
