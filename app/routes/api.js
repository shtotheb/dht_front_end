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
			Torrent.find({}, function(err, torrents) {
				if (err) res.send(err);
				res.json(torrents);
			}).limit(500);
		});

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
		.sort( { score: { $meta: "textScore" } } )
		.exec(function(err, torrent) {
			if (err) res.send(err);
			res.json(torrent);
		});
	})



	return apiRouter;
};
