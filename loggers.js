module.exports={

	//logs to the console the status of sending a tweet
	tweetLog : function(err,data,response){
		if(err)
			console.log(err);
		else
			console.log('Tweet sent!');
	},

	//logs to the console the status of sending a DM
	messageLog : function(err,data,response){
		if(err)
			console.log(err);
		else
			console.log('Message sent to sender!');
	},

	//logs to the console the status of forwarding a DM to the creator
	forwardToMasterLog : function(err,data,response){
		if(err)
			console.log(err);
		else
			console.log('Message forwarded to @yassermo97!');
	},

	//logs to the console the status of sending a reply
	replyLog : function(err,data,response){
		if(err)
			console.log(err);
		else
			console.log('Reply sent!');
	},
	
	retweetLog : function(err,data,response){
		if(err)
			console.log(err);
		else
			console.log('Retweet sent!');
	}
	
}
