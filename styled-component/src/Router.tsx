import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:coinId'>
          <Coins />
        </Route>
        <Route path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;