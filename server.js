var io = require('socket.io'),
  connect = require('connect'),
  Twit = require('twit')

var T = new Twit({
    consumer_key: '46slRvmWrxSmCJPI8aw4oA'
  , consumer_secret: '13jraQxZPeZrL8j2nGYWeMm127kCqA0KWA8kJoFO4'
  , access_token: '545316473-JycR41de4iBRiJsG97ETa7DXiZdSh1goyFi5oJUU'
  , access_token_secret: 'Zomhy65WZiAIeOy99XM5oa7miDly1DFB2Lv5codEauRY6'
})


//var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

// T.get('search/tweets', { q: 'ios7'}, function(err, reply) {
// 	msg = reply;
// 	count += msg.search_metadata.count;
// 	current_count = msg.search_metadata.count;
// }) 

var app = connect().use(connect.static('public')).listen(3000);
var twitter_data = io.listen(app);

twitter_data.sockets.on('connection', function (socket) {
  socket.emit('entrance',  {message: 'Welcome'});
	

  var stream = T.stream('statuses/filter', { track: '!!!' })
  stream.on('tweet', function (tweet) {
    socket.broadcast.emit('update', tweet);
  })


  socket.on('disconnect', function  () {
    twitter_data.sockets.emit('exit', {message: 'Someone has disconnected.'});
  });

});
 
