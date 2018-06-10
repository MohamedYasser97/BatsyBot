var Twit = require('twit');
var config = require('./config');
var tweeter = require('./tweeter');
var handler = require('./handlers');
var emoji = require('./emojis');

//create a new object from the package and make it public for other modules
var T = new Twit(config);
module.exports.T=T;

//notifies followers that bot is online
tweeter.tweet('I\'m online now!\nglad to see you again\n'+ emoji.random(Math.floor(Math.random()*2)+1));
var readyToShutdown=true;

console.log('The bot is running.');

var stream = T.stream('user');

//wait for different types of events (see more in Twit's documentation)
stream.on('follow',handler.followed);

stream.on('tweet',handler.tweeted);

stream.on('direct_message',handler.messaged);


//waits for input from the command line just before shutting down with CTRL+C
process.stdin.resume();

//() => is just the same as saying function(){}
//notifies followers that bot is offline
process.on('SIGINT', () => {
	if(readyToShutdown){
		tweeter.tweet('I\'m offline now!\nI won\'t be able to interact with any of you\nSee you soon!\n'+ emoji.happy(Math.floor(Math.random()*2)+1));
		readyToShutdown=false;
	}
});
