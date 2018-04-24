import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Bark from './Bark';
import Main from './Main';
import History from './History';


const App = () => (
    <BrowserRouter>
        <div>
        <Route path="/" component={Main} />
        <Route path="/bark" component={Bark} />
        <Route path="/history" component={History} />
        </div>
    </BrowserRouter>
)

export default App;