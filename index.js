/** Simple usage torrent-stream */
var torrentStream = require('torrent-stream');
var magnet = 'magnet:?xt=urn:btih:ec18a73cf1aa40e9700028e60cb7514754640ea8&dn=torrent_5037212.torrent&xl=532474100&tr=http%3A%2F%2F7tor.org%2Ftracker%2Fannounce2.php%3Fpasskey%3D86fb6557e21f5f198fcd366342838f83&tr=http%3A%2F%2Fbt3.t-ru.org%2Fann&tr=http%3A%2F%2Fbt5.rutracker.cc%2Fann&tr=http%3A%2F%2Fbt4.rutracker.cc%2Fann&tr=http%3A%2F%2Fbt3.rutracker.cc%2Fann&tr=http%3A%2F%2Fbt2.rutracker.cc%2Fann&tr=http%3A%2F%2Fbt.rutracker.cc%2Fann&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=http%3A%2F%2Fpubt.net%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.ccc.de%3A80&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.torrentbay.to%3A6969%2Fannounce&tr=http%3A%2F%2Fcpleft.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.istole.it%3A80&tr=http%3A%2F%2Fretracker.local%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce';
var engine = torrentStream(magnet, { path: '/home/fridge/code'});

engine.on('ready', function() {
	engine.files.forEach(function(file) {
		console.log('filename: ', file.name);
	});
});
