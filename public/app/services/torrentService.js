angular.module('torrentService', [])

.factory('Torrent', function($http) {

	var torrentFactory = {};

	torrentFactory.get = function(id) {
		return $http.get('/api/torrent/' + id);
	};

	torrentFactory.all = function() {
		return $http.get('/api/torrents/');
	};

	torrentFactory.search = function(id) {
		return $http.get('/api/torrentsearch/' + id);
	};

	return torrentFactory;
});
