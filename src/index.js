import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import {store} from "./store"
import {HashRouter, Route, Routes} from "react-router-dom";
import {createBrowserHistory} from "history";
import {syncHistoryWithStore}  from "react-router-redux";
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const history = syncHistoryWithStore(createBrowserHistory(), store);

root.render(
  <Provider store={store}>
      <HashRouter history={history}>
        <Routes>
          <Route path="*" element={ <App />}/>
        </Routes>
      </HashRouter>
  </Provider>
);

