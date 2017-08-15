var bodyParser = require('body-parser');
var Torrent       = require('../models/Torrent');
var jwt        = require('jsonwebtoken');
var config     = require('../../config');
var bytes = require('bytes');

module.exports = function(app, express) {

	var apiRouter = express.Router();

	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });
	});

	apiRouter.route('/torrents')

		.get(function(req, res) {
			Torrent.count({}, function(err, count){
				if (err) res.send(err);
		    res.json(data);
			});
		})

	apiRouter.route('/torrent/:torrent_id')

		.get(function(req, res) {
			Torrent.findById(req.params.torrent_id, function(err, torrent) {
				if (err) res.send(err);
				res.json(torrent);
			});
		})

	apiRouter.route('/torrentsearch/:name')

	.get(function(req, res) {
		Torrent.find(
			{ $text : { $search : req.params.name }},
			{ score: { $meta: "textScore" } })
		.select({ name : 1, categories : 1, size : 1, swarm : 1, imported : 1 })
		.sort( { score: { $meta: "textScore" } } )
		.exec(function(err, torrent) {
			if (err) res.send(err);
			res.json(torrent);
		});
	})

	return apiRouter;
};
