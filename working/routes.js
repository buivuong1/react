var App = require('modules/blank');

var routes = {
	path: '/',
	component: App,
	childRoutes: []
}

var Design = require('modules/design/routes');
Design.map(function(route){
	routes.childRoutes.push(route);
})

module.exports = routes;