import React from 'react';
import {ProjectList} from '../../modules/projects/components/ProjectList';
import './Home.css';

const Home: React.FC  = () => {
  return (
    <main>
      <ProjectList />
    </main>
  );
};

export {Home};

