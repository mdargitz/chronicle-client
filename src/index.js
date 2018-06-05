import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Characters from './components/characters';
import General from './components/general';
import Login from './components/login';
import Plots from './components/plots';
import {Provider} from 'react-redux';
import Settings from './components/settings';
import SideNav from './components/side-nav';
import store from './store';
import Stories from './components/stories';
import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './components/registration';
import registerServiceWorker from './registerServiceWorker';
import TopNav from './components/top-nav';
import './index.css';

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
