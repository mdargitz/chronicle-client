import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registration from './components/registration';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <div>
    <Registration />
  </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
