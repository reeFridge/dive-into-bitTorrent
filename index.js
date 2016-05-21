/** Simple usage node-torrent */
var Client = require('node-torrent');
var client = new Client({ logLevel: 'DEBUG'});
var torrent = client.addTorrent('torrentFiles/crossed.torrent');

torrent.on('complete', function() {
	console.log('complete');
	torrent.files.forEach(function(file) {
		console.log(file.name);
		console.log(file.path);
	});
});