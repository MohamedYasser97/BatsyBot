//using emojis makes it feel more human-like and also now there should be no worries about getting flagged for duplicate tweets/messages
module.exports={

	happy : function(n){

		if(n==0)
			return '';

		var arr = ["❤","😀","😁","😄","😊","😍","😘","☺","🤗","😌","😅","😉","😎","😌","😛","😜","😝","🤤","🤑","😇","🤠","😺","😸","😻","🙈","💃","🕺","👍"];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	},

	funny : function(n){

		if(n==0)
			return '';

		var arr = ["😂","🤣","😆","🤪","🤭","🤓","🤡","😹"];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	},

	neutral : function(n){

		if(n==0)
			return '';

		var arr = ["🤔","🤨","😐","😑","😶","🙄","😏","🤐","😪","😫","😴","😬","🦇","🌚","🌝"];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	},

	sad : function(n){

		if(n==0)
			return '';

		var arr = ["😣","😥","😒","😓","😔","😕","☹","🙁","😖","😞","😟","😢","😭","😩","😰","😿"];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	},

	surprised : function(n){

		if(n==0)
			return '';

		var arr = ["😮","😯","😲","😦","😧","😨","🤯","😱","😳","😵","🙀"];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	},

	angry : function(n){

		if(n==0)
			return '';

		var arr = ["😒","🙃","😤","😡","😠","🤬","😾","👎","💣"];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	},

	random : function(n){

		if(n==0)
			return '';

		var arr = [this.happy(1),this.funny(1),this.neutral(1),this.sad(1),this.surprised(1),this.angry(1)];
		var output = '';

		while(n--)
			output += arr[Math.floor(Math.random() * arr.length)];

		return output;
	}

}