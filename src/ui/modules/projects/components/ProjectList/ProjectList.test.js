import {ProjectList} from './ProjectList';
import { render, screen,  waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import * as getProjects  from '../../../../../core/projects/services/getProjects'
import * as getProjectsFake  from '../../../../../core/projects/services/getProjectsFake'
import {projectsFixture} from '../../../../../core/projects/data/projectsFixture'

describe('ProjectList', () => {

    let mockGetProjects = jest.spyOn(getProjectsFake, 'getProjectsFake');
    //let mockGetProjects = jest.spyOn(getProjects, 'getProjects');

    beforeEach(() => {
        mockGetProjects.mockReturnValue(projectsFixture);
    });

    it('should show the projects', async () => {
        // Arrange
        const history = createMemoryHistory();

        // Act
        render(<Router history={history}><ProjectList/></Router>);

        // Assert
        await waitFor(() => expect(screen.getByText("Tareas")).toBeInTheDocument())

    });

})
