/*
Main component as a container for other components such as Search, Mealplan, etc.  
*/

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import 'font-awesome/css/font-awesome.css';

import './global.scss';

import Landing from './components/page/Landing';
import Search from './components/page/Search';
import SearchStore from './components/page/SearchStore';
import Signup from './components/page/Signup';
import Signin from './components/page/Signin';
import MealPlan from './components/page/MealPlan';




// Main App component 
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="/search-store" component={SearchStore} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/meal-plan" component={MealPlan} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;