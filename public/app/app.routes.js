angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider, $compileProvider) {

	$routeProvider

		// show all users
		.when('/torrents', {
			templateUrl: 'app/views/pages/torrents/all.html',
			controller: 'torrentController',
			controllerAs: 'torrent'
		})

		// page to edit a user
		.when('/torrent/:torrent_id', {
			templateUrl: 'app/views/pages/torrents/single.html',
			controller: 'torrentShowController',
			controllerAs: 'torrent'
		})

		.when('/torrentsearch/:name', {
			templateUrl: 'app/views/pages/torrents/all.html',
			controller: 'torrentSearchController',
			controllerAs: 'torrent'
		});

	$locationProvider.html5Mode(true);

	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|magnet):/);
	// Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)

});
