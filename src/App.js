import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/Homapge.component';
import ShopPage from './pages/shop/ShopPage';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    
    </div>
  );
}

export default App;
