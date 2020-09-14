var iconv = require('iconv-lite');
var showdown  = require('showdown');
var fs = require('fs');
let filename = process.argv[2] || "README";
//let filename = "testM"
//let pageTitle = process.argv[2] || ""
let pageTitle = "API DOC"; 

fs.readFile(__dirname + '/style.css', function (err, styleData) {
  fs.readFile(process.cwd() + '/' + filename+'.md','binary', function (err, data) {
    if (err) {
      throw err; 
    }
    let text = data.toString();

    converter = new showdown.Converter({
      ghCompatibleHeaderId: true,
      simpleLineBreaks: true,
      ghMentions: true,
      tables: true
    });

    let preContent = `
    <html>
      <head>
        <title>` + pageTitle + `</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id='content'>
    `

    let postContent = `

        </div>
        <style type='text/css'>` + styleData + `</style>
      </body>
    </html>`;

    html = preContent + converter.makeHtml(text) + postContent

    converter.setFlavor('github');
    console.log(html);

    utf8Text = iconv.decode(html, "euc-kr");

    let filePath = process.cwd() + '/' + filename + '.html';
//    fs.writeFile(filePath, html, { flag: "wx" }, function(err) {
    fs.writeFile(filePath, utf8Text, function(err) {
      if (err) {
        console.log("File '" + filePath + "' already exists. Aborted!");
      } else {
        console.log("Done, saved to " + filePath);
      }
    });
  });
});
