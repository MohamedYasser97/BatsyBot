var tweeter = require('./tweeter');
var emoji = require('./emojis');

module.exports={

	//takes any number JSON data parsed by the handlers as arguments and does the desired function
	followAction : function(followerUsername){

		tweeter.tweet('@'+followerUsername+' Thanks for following me!'+ emoji.happy(Math.floor(Math.random()*3)+1));
	},

	//takes any number JSON data parsed by the handlers as arguments and does the desired function
	tweetAction : function(username, replyToUsername, tweetId){

		if(replyToUsername=='batsybot' && username!='batsybot'){
			if(username!='yassermo97')
				tweeter.reply('@'+username+' My master hasn\'t taught me what to say yet but thanks for your mention anyway'+ emoji.funny(Math.floor(Math.random()*2)+1)+'\nYou can find his handle in my bio though.'+ emoji.happy(Math.floor(Math.random()*3)),tweetId);
			else
				tweeter.reply('@'+username+' I still don\'t know what to say but thanks A LOT for creating me, master.'+ emoji.random(Math.floor(Math.random()*2)+1),tweetId);
		}
	},

	//takes any number JSON data parsed by the handlers as arguments and does the desired function
	messageAction : function(senderUsername, senderUserId, recipientUsername, messageText){

		if(senderUsername!='yassermo97' && senderUsername!='batsybot')
  			tweeter.message(content,senderUsername,senderUserId,recipientUsername);
	}
}