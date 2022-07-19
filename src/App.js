import logo from './logo.png';
import coffee from './coffee.png';
import Navbar from './navbar';
import NavbarBottom from './bottomBar';
import Quiz from './quiz';
import Shop from './shop';
import Order from './order';
import Confirmation from './confirmation';
import Home from './home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class ="content">

          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route exact path = "/shop">
              <Shop/>
            </Route>
            <Route exact path = "/order">
              <Order/>
            </Route>
            <Route exact path = "/confirmation">
              <Confirmation/>
            </Route>
            <Route exact  path = "/quiz">
              <Quiz/>
            </Route>
          </Switch>
            
        </div>

        <NavbarBottom />
      </div>
    </Router>    
  );
}

export default App;
