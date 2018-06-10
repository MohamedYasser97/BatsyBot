# BatsyBot
  A reusable twitter bot skeleton made with the Node.js [Twit](https://www.npmjs.com/package/twit) package 
  

## Motivation
    I was interested in how bots work, so I decided to make one but I didn't have a bot idea in mind.
That's when I thought about making a bot that can be customised to make almost everything. So when I or anyone 
needs to add a npm package to fulfill a certain job, minimum modifications to the original project would be needed. In that way, 
the programmer will focus on the important parts of the bot's job rather than building a bot from scratch. The npm package 
[Twit](https://www.npmjs.com/package/twit) was extremely helpful and well documented.

## Functions
  When you clone this project and don't edit anything, you will have a bot that can:
  * Tweet when connected to a server.
  * Thanks followers when followed.
  * Reply when mentioned.
  * Monitor all tweets in its timeline.
  * Reply to DMs and forward messages to bot creator.
  * Tweet when disconnected from a server.
  
## A note about emojis
   At first, I didn't plan to add emojis to each tweet or DM. What happened is that Twitter didn't allow 
  my bot to send the same tweet multiple times (The server status tweet for example). So, I appended a random string to the end of every 
  tweet and that resolved the problem but it didn't look good or user-friendly. So I added emojis describing different emotions and 
  used them in their appropriate context. In case you don't like emojis, you can replace them with any variable data like time,ID,...etc. 
  or maybe your bot won't need to send duplicate tweets at all!
  
## How this works
  The first thing that happens is that an instance of [Twit's](https://www.npmjs.com/package/twit) package is created with your own 
  Twitter API keys. After that, a __user stream__ is created to wait and listen for incoming follows, tweets and DMs. Read [Twitter's API documentation](https://developer.twitter.com/en/docs.html) to 
  know about other streams.\
  \
  When the stream receives an incoming object it triggers the respective __handler__. Handlers in my project 
  work on extracting all useful data from the received object and storing them in variables to be passed to the __action__ 
  functions.\
  \
  Action functions decide exactly what to do with the handler's data and in what way. Since Twitter is basically all about 
  tweets and DMs, I've created __tweeter__ functions for this purpose.\
  \
  Tweeter is responsible for correctly parsing tweets, replies and messages before sending them using the Twit instance 
  mentioned at the beginning.\
  \
  It's worthy to mention that __emojis__ and __console loggers__ have their own separate files as well.

## Usage
  Of course you first need to have Node.js installed on your computer. Then there are some files that really need to be modified: 
  * __config.js__\
   This file contains the Twitter API keys that can be accessed from [here](https://apps.twitter.com/).
  - - - - 
  * __bot.js__\
   This is the bot's main file that should be run first and that's the file which will use the other files for your desired purpose. 
   You can think of this file as your empty sandbox.
  - - - -
  * __actions.js__\
   This is the most important file. This is where you decide on how to react when a new tweet, mention or DM enters your stream.
  - - - -
  * __handlers.js__\
  Don't feel threatened by those huge walls of code! I've gathered all useful data from the tweet, DM and follow objects so you can 
  pass them as arguments to the called functions from __actions.js__ which you will need to change anyway.
  - - - -
  * __package.json__\
  You have to change the start script target file in this file to whatever you decide to name your new __bot.js__ file
  - - - -
  After that, all you have to do to run your bot is to open your terminal, navigate to the project directory and type:\
  `npm start`\
  Simple as that!
  
  ## Probable future features
  The following features aren't crucial to the bot's functionality but they would make a great addition: 
  * Making the bot support media (Images and videos).
  * Making a blueprint or basic outline for the mechanism of searching for tweets and their different filters.\
  \
  But after all, I wasn't encouraged to implement these features in the main project because not all applications require these 
  features so it would be somehow harder to modify the files for your bot's purpose which is against the project's main idea.
  
  ## Personal Request
   Anyone can use this project as they like but I would love to get credited in any possible way. Let it be a mention on Twitter, an E-mail or 
   a Facebook message. Just let me know if my project is useful in any way or if something needs to be fixed. Happy coding and I hope you build amazing bots!\
   [Twitter](https://twitter.com/yassermo97)\
   [Facebook](https://www.facebook.com/myasser99)\
   __mhmd.yasser@gmail.com__
