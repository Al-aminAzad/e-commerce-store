import './App.css';
import HomePage from './pages/homepage/Homapge.component';
import {Route,Switch} from 'react-router-dom';

const HatsPage = (props)=>{
  console.log(props);
  return(
    <h1>Hats Page</h1>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/hats' component={HatsPage}/>
      </Switch>
    
    </div>
  );
}

export default App;
