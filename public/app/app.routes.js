angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider, $compileProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html'
		})

		.when('/torrent/:torrent_id', {
			templateUrl: 'app/views/pages/torrents/single.html',
			controller: 'torrentShowController',
			controllerAs: 'torrent'
		})

		.when('/torrentsearch/:name', {
			templateUrl: 'app/views/pages/torrents/all.html',
			controller: 'torrentSearchController',
			controllerAs: 'torrent'
		})

		.when('/404', {
			templateUrl: 'app/views/pages/404.html'
		})

		.otherwise({
			redirectTo: '/404'
		});

	$locationProvider.html5Mode(true);

	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|magnet):/);
	// Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)

});
