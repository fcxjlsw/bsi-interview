import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from "./state/store/index";

import './scss/app.scss';
ReactDOM.render(
    <Provider store={store}>
        <App />
  </Provider>, document.getElementById('root')
)