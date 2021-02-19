import { Switch, Route } from 'react-router';
import Navbar from '../components/Navbar';
import Lifestyle from './Lifestyle';

const Home = () => (
  <div className="h-100">
    <Navbar />
    <main>
      <Switch>
        <Route path="/home" component={Lifestyle} />
      </Switch>
    </main>
  </div>
);

export default Home;
