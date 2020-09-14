var iconv = require('iconv-lite');
var fs = require('fs');

fs.readFile(__dirname + '/style.css', function (err, styleData) {
  fs.readFile(process.cwd() + '/' +'hanTest.txt', 'binary', function (err, data) {
    if (err) {
      throw err; 
    }
    let text = data.toString();
    var utf8Text = iconv.decode(text, "euc-kr");
    console.log(utf8Text);

    let filePath = process.cwd() + '/' + 'hanOut.txt';
    fs.writeFile(filePath, utf8Text, function(err) {
      if (err) {
        console.log("File '" + filePath + "' already exists. Aborted!");
      } else {
        console.log("Done, saved to " + filePath);
      }
    });
  });
});
