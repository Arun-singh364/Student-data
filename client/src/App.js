import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentData from './components/StudentData';

function App() {
  return (
    <div className="App">
     <Switch>
     
      <Route exact path='/' component={Signup}/>
      <Route  path='/userdata' component={StudentData}/>
    </Switch>
    </div>
  );
}

export default App;
