angular.module('torrentCtrl', ['torrentService'])

.controller('searchCtrl', function($scope) {
		$scope.torrentname = "";
})

.controller('torrentController', function(Torrent) {

	var vm = this;
	vm.processing = true;
	Torrent.all()
		.then(function(data) {
			vm.processing = false;
			vm.torrents = data;

		});
})


.controller('torrentShowController', function($routeParams, Torrent) {
	var vm = this;
	Torrent.get($routeParams.torrent_id)
		.then(function(data) {
			vm.torrentData = data;
		});

})

.controller('torrentSearchController', function($routeParams, Torrent) {
	var vm = this;
	vm.processing = true;
	vm.query = $routeParams.name
	Torrent.search($routeParams.name)
		.then(function(data) {
			vm.processing = false;
			vm.torrents = data;
		})
});
