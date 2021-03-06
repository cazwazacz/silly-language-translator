var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PigLatin = require("../components/PigLatin");
var PigLatinContainer = require('../containers/PigLatinContainer');
var IzzleContainer = require('../containers/IzzleContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>``
      <IndexRoute component={Home} />
      <Route path='piglatin' component={PigLatinContainer} />
      <Route path='izzle' component={IzzleContainer} />
    </Route>
  </Router>
);

module.exports = routes;