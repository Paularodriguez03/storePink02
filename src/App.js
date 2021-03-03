import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//components
import Welcome from './components/pages/Welcome';
import Home from './components/pages/Home';



function App() {
  return ( 
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

