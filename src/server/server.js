var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var Q = require('q');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var upload = multer();

router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router.post('/save', upload.array(), (req, res) => {
  Q.nfcall(fs.rename, 'public/data.js', 'public/data.js.' + new Date())
    .then(() => {
      return Q.nfcall(fs.writeFile, 'public/data.js', req.body.data, 'utf-8');
    })
    .then(() => {
      res.json({success: true});
    })
    .catch((error) => {
      res.send(error);
    })
    .done();
});

app.use('/mc/trivia-editor/api', router);
app.use('/mc/trivia-editor', express.static('public'));
app.listen(port);

console.log('express is on port: ' + port);
