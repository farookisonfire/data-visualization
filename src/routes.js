import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Total from './components/total/Total';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/total" component={Total}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
