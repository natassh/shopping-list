import { Switch, Route } from 'react-router-dom';
import {Home} from '../../pages/Home';
import {ProjectDetail} from '../../pages/ProjectDetail';
import {Contact} from '../../pages/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}
  
export {Routes};