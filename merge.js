const Fs = require('fs');

Fs.readFile('1.min.html', 'utf8', function(err, html) {
	Fs.readFile('1.min.js', 'utf8', function(err, js) {
		Fs.readFile('1.min.css', 'utf8', function(err, css) {
			html = html.replace('<link href="1.min.css" rel="stylesheet" type="text/css" />', '<style>' + css + '</style>');
			let search = '<script src="1.min.js"></script>';
			let index = html.indexOf(search);
			html = html.substring(0, index) + '<script>' + js + '</script>' + html.substring(index + search.length);
			Fs.writeFile('editor.min.html', html, 'utf8', console.log);
		});
	});
});