angular.module('torrentCtrl', ['torrentService'])

.controller('indexCtrl', function($scope, $location) {
		var vm = this;
		vm.location = function(newLocation){
			return $location.url(newLocation);
		}
		vm.torrentname = $scope.torrentname;
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
	vm.processing = true;
	Torrent.get($routeParams.torrent_id)
		.then(function(data) {
			vm.processing = false;
			vm.torrentData = data;
		});
})

.controller('torrentSearchController', function($routeParams, Torrent, $scope) {
	var vm = this;

	vm.processing = true;
	vm.query = $routeParams.name;
	vm.navActive = ["active", "inactive", "inactive", "inactive", "inactive", "inactive"];
	vm.listFilterArray = ["", "video", "audio", "doc", "exe", "other"];
	vm.listFilter = vm.listFilterArray[0];
	vm.listOrder = ["swarm.seeders", "swarm.leechers", "size", "imported", "name", "score", "Seeders", "Leechers", "Size", "Date", "Name", "Relevance"];
	vm.orderReverse = false;
	vm.orderChoice = ["score", "Relevance"];

	$scope.clickOrder = function(category, reverse) {
		vm.orderChoice[0] = vm.listOrder[category];
		vm.orderChoice[1] = vm.listOrder[category + 6];
		vm.orderReverse = vm.reverse;
	}

	Torrent.search($routeParams.name)
		.then(function(data) {
			vm.processing = false;
			vm.torrents = data;
		})

	$scope.clickActive = function(category) {
		for(var i=0; i<6; i++){
			vm.navActive[i] = "inactive"
		}
		vm.navActive[category] = "active";
		vm.listFilter = vm.listFilterArray[category];
	}
});
