import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';
import Stories from './components/stories';
import SideNav from './components/side-nav';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import General from './components/general';
import Characters from './components/characters';
import Settings from './components/settings';
import Plots from './components/plots';
import TopNav from './components/top-nav';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Route exact path="/" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/stories"/>
            ) : (
              <Login />
            )
          )}/>
          <Route path='/stories' component={TopNav} />
          <Route path='/stories/:storyId' component={SideNav} />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Registration} />
            <Route exact path='/stories' component={Stories} />
            <Route exact path='/stories/:storyId' component={General} />
            <Route exact path='/stories/:storyId/characters' component={Characters} />
            <Route exact path='/stories/:storyId/settings' component={Settings} />
            <Route exact path='/stories/:storyId/plots' component={Plots} />
          </Switch>

        </div>
      </Router>
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
