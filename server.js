var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

app.use(history({
// verbose: true
}));

app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 8080));

// app.listen(app.get('port'), () => {
// console.log(ENV: ${process.env.NODE_ENV});
// console.log(Derp is running at localhost: ${app.get('port')});
// });



// const express = require('express')
// const path = require('path')
// const history = require('connect-history-api-fallback')
// // ^ middleware to redirect all URLs to index.html

// const app = express()
// const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))

// app.use(staticFileMiddleware)
// app.use(history())
// app.use(staticFileMiddleware)
// // ^ `app.use(staticFileMiddleware)` is included twice as per https://github.com/bripkens/connect-history-api-fallback/blob/master/examples/static-files-and-index-rewrite/README.md#configuring-the-middleware

// app.get('/', function (req, res) {
//   res.render(path.join(__dirname + '/index.html'))
// })

// app.listen(5000, function () {
//   console.log( 'Express serving on 5000!' )
// })





// const express = require('express');
// const path = require('path');
// const history = require('connect-history-api-fallback');

// const app = express();

// const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

// app.use(staticFileMiddleware);
// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));
// app.use(staticFileMiddleware);

// app.get('/', function (req, res) {
//   res.render(path.join(__dirname + '/dist/index.html'));
// });

// var server = app.listen(process.env.PORT || 8080, function () {
//   var port = server.address().port;
//   console.log("App now running on port", port);
// });
