var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var link = fields.mlink;
      console.log(link);
      console.log('The file is open');
      var oldpath = files.filetoupload.filepath;
      var filenam = files.filetoupload.originalFilename;
      var replaced = filenam.replace(/ /g, '_');
      var newpath = 'uploads/' + replaced;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.write(link);
        res.end();
      });
 });
  } 
}).listen(8080);