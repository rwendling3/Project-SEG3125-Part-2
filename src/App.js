import logo from './logo.png';
import coffee from './coffee.png';
import Navbar from './navbar';
import NavbarBottom from './bottomBar';
import Quiz from './quiz';
import Shop from './shop';
import Order from './order';
import Confirmation from './confirmation';
import QuizContent1 from './quizContent1';
import Home from './home';
import FAQ from './FAQ';
import PageNotFound from './PageNotFound';

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
            <Route exact  path = "/quizresults">
              <QuizContent1/>
            </Route>
            <Route exact path="/Project-SEG3125-Part-2"> 
              <Home/>
            </Route>
            <Route exact path="/FAQ"> 
              <FAQ/>
            </Route>
            <Route exact path="*"> 
              <PageNotFound/>
            </Route>
            

          </Switch>
            
        </div>

        <NavbarBottom />
      </div>
    </Router>    
  );
}

export default App;
