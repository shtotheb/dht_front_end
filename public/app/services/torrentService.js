angular.module('torrentService', [])

.factory('Torrent', function($http) {

	// create a new object
	var torrentFactory = {};

	// get a single user
	torrentFactory.get = function(id) {
		return $http.get('/api/torrent/' + id);
	};

	// get all users
	torrentFactory.all = function() {
		return $http.get('/api/torrents/');
	};

	torrentFactory.search = function(id) {
		return $http.get('/api/torrentsearch/' + id);
	};

	// return our entire userFactory object
	return torrentFactory;
});
