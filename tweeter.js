var main = require('./bot');
var log = require('./loggers');
var emoji = require('./emojis')

module.exports={

	//uses the Twit package object created in the main bot file to send a tweet
	tweet : function(txt){

		var tweet = {
			status : txt
		}

		main.T.post('statuses/update',tweet,log.tweetLog);
	},

	//uses the same object to send a DM
	message : function(txt,senderUsername,senderUserId,recipientUsername){

		var reply = { 
			user_id: senderUserId,
    		text: 'Hi :D\nMy master @yassermo97 hasn\'t taught me what to say in this situation\nI\'ll let him know you DMed me!' + emoji.happy(Math.floor(Math.random()*2)+1), 
    		screen_name: senderUsername 
    	};

    	var forward = {
    		user_id: 368831066 ,
    		text: 'Hi master!\n'+'@'+senderUsername+' sent me this just now:\n'+txt , 
    		screen_name: 'yassermo97'
    	};

    	if(senderUsername != recipientUsername){

    		main.T.post('direct_messages/new',reply,log.messageLog);

    		main.T.post('direct_messages/new',forward,log.forwardToMasterLog);
    	}

	},

	//uses the same object to send a reply
	reply : function(txt,tweetId){

		var tweet = {
			status : txt,
			in_reply_to_status_id : tweetId
		}

		main.T.post('statuses/update',tweet,log.replyLog);
	},
	
	retweet : function(tweetId){
		main.T.post('statuses/retweet/:id', { id: tweetId }, log.retweetLog);
	}
}
