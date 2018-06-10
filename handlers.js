var action = require('./actions');

//the code that handles the different events that happened in the main bot file
module.exports={

	//parses the JSON data of any follow event involving the bot and then acts accordingly using the actions module
	followed : function (eventMsg){

		var creationDate = eventMsg.created_at;

		var followerId = eventMsg.source.id_str;
		var followerName = eventMsg.source.name; 
		var followerUsername = eventMsg.source.screen_name;
		var followerLocation = eventMsg.source.location;
		var followerUrl = eventMsg.source.url;
		var followerBio = eventMsg.source.description;
		var followerIsProtected = eventMsg.source.protected;
		var followerFollowCount = eventMsg.source.followers_count;
		var followerFollowingCount = eventMsg.source.friends_count;
		var followerListedCount = eventMsg.source.listed_count;
		var followerCreationDate = eventMsg.source.created_at;
		var followerFavedCount = eventMsg.source.favourites_count;
		var followerUtcOffset = eventMsg.source.utc_offset;
		var followerTimeZone = eventMsg.source.time_zone;
		var followerIsGeoEnabled = eventMsg.source.geo_enabled;
		var followerIsVerified = eventMsg.source.verified;
		var followerTweetCount = eventMsg.source.statuses_count;
		var followerLanguage = eventMsg.source.lang;
		var followerIsContributorsEnabled = eventMsg.source.contributors_enabled;
		var followerIsTranslator = eventMsg.source.is_translator;
		var followerIsTranslatorEnabled = eventMsg.source.is_translation_enabled;
		var followerProfileBackgroundColor = eventMsg.source.profile_background_color;
		var followerProfileBackgroundImageUrl = eventMsg.source.profile_background_image_url;
		var followerProfileBackgroundImageUrlHttps = eventMsg.source.profile_background_image_url_https;
		var followerIsProfileBackgroundTile = eventMsg.source.profile_background_tile;
		var followerProfileImageUrl = eventMsg.source.profile_image_url;
		var followerProfileImageUrlHttps =eventMsg.source.profile_image_url_https;
		var followerProfileBannerUrl = eventMsg.source.profile_banner_url;
		var followerProfileLinkColor = eventMsg.source.profile_link_color;
		var followerProfileSidebarBorderColor = eventMsg.source.profile_sidebar_border_color;
		var followerProfileSidebarFillColor = eventMsg.source.profile_sidebar_fill_color;
		var followerProfileTextColor = eventMsg.source.profile_text_color;
		var followerIsProfileUseBackgroundImage = eventMsg.source.profile_use_background_image;
		var followerIsDefaultProfile = eventMsg.source.default_profile;
		var followerIsDefaultProfileImage = eventMsg.source.default_profile_image;
		var followerIsFollowing = eventMsg.source.following;
		var followerIsFollowRequestSent = eventMsg.source.follow_request_sent;
		var followerIsNotifications = eventMsg.source.notifications;
		var followerTranslatorType = eventMsg.source.translator_type;


		var followedId = eventMsg.target.id_str;
		var followedName = eventMsg.target.name; 
		var followedUsername = eventMsg.target.screen_name;
		var followedLocation = eventMsg.target.location;
		var followedUrl = eventMsg.target.url;
		var followedBio = eventMsg.target.description;
		var followedIsProtected = eventMsg.target.protected;
		var followedFollowCount = eventMsg.target.followers_count;
		var followedFollowingCount = eventMsg.target.friends_count;
		var followedListedCount = eventMsg.target.listed_count;
		var followedCreationDate = eventMsg.target.created_at;
		var followedFavedCount = eventMsg.target.favourites_count;
		var followedUtcOffset = eventMsg.target.utc_offset;
		var followedTimeZone = eventMsg.target.time_zone;
		var followedIsGeoEnabled = eventMsg.target.geo_enabled;
		var followedIsVerified = eventMsg.target.verified;
		var followedTweetCount = eventMsg.target.statuses_count;
		var followedLanguage = eventMsg.target.lang;
		var followedIsContributorsEnabled = eventMsg.target.contributors_enabled;
		var followedIsTranslator = eventMsg.target.is_translator;
		var followedIsTranslatorEnabled = eventMsg.target.is_translation_enabled;
		var followedProfileBackgroundColor = eventMsg.target.profile_background_color;
		var followedProfileBackgroundImageUrl = eventMsg.target.profile_background_image_url;
		var followedProfileBackgroundImageUrlHttps = eventMsg.target.profile_background_image_url_https;
		var followedIsProfileBackgroundTile = eventMsg.target.profile_background_tile;
		var followedProfileImageUrl = eventMsg.target.profile_image_url;
		var followedProfileImageUrlHttps =eventMsg.target.profile_image_url_https;
		var followedProfileBannerUrl = eventMsg.target.profile_banner_url;
		var followedProfileLinkColor = eventMsg.target.profile_link_color;
		var followedProfileSidebarBorderColor = eventMsg.target.profile_sidebar_border_color;
		var followedProfileSidebarFillColor = eventMsg.target.profile_sidebar_fill_color;
		var followedProfileTextColor = eventMsg.target.profile_text_color;
		var followedIsProfileUseBackgroundImage = eventMsg.target.profile_use_background_image;
		var followedIsDefaultProfile = eventMsg.target.default_profile;
		var followedIsDefaultProfileImage = eventMsg.target.default_profile_image;
		var followedIsFollowing = eventMsg.target.following;
		var followedIsFollowRequestSent = eventMsg.target.follow_request_sent;
		var followedIsNotifications = eventMsg.target.notifications;
		var followedTranslatorType = eventMsg.target.translator_type;

		//function arguments can be changed to suit the needed application
		action.followAction(followerUsername);
		
	},

	//parses the JSON data of any tweet involving the bot and then acts accordingly using the actions module
	tweeted : function (eventMsg){

		var content = eventMsg.text;
		var replyToUserName = eventMsg.in_reply_to_screen_name;
		var replyToUserId = eventMsg.in_reply_to_user_id_str;
		var replyToStatusId = eventMsg.in_reply_to_status_id_str;
		var tweetCreationDate = eventMsg.created_at;
		var tweetId = eventMsg.id_str;

		var isTruncated = eventMsg.truncated;

		var geo = eventMsg.geo;
		var coordinates = eventMsg.coordinates;
		var place = eventMsg.place;

		var contributors = eventMsg.contributors;
		var isQuoted = eventMsg.is_quote_status;
		var isFaved = eventMsg.favorited;
		var isRetweeted = eventMsg.retweeted;
		var quoteCount = eventMsg.quote_count;
		var replyCount = eventMsg.reply_count;
		var retweetCount = eventMsg.retweet_count;
		var tweetFavCount = eventMsg.favorite_count;
		var filterLevel = eventMsg.filter_level;
		var tweetLanguage = eventMsg.lang;
		var timeStampMillis = eventMsg.timestamp_ms;

		var userId = eventMsg.user.id_str;
		var name = eventMsg.user.name;
		var username = eventMsg.user.screen_name;
		var location = eventMsg.user.location;
		var url = eventMsg.user.url;
		var bio = eventMsg.user.description;
		var translatorType = eventMsg.user.translator_type;
		var isProtected = eventMsg.user.protected;
		var isVerified = eventMsg.user.verified;
		var followerCount = eventMsg.user.followers_count;
		var friendCount = eventMsg.user.friends_count;
		var listedCount = eventMsg.user.listed_count;
		var userFavCount= eventMsg.user.favourites_count;
		var tweetCount = eventMsg.user.statuses_count;
		var userCreationDate= eventMsg.user.created_at;
		var utcOffset = eventMsg.user.utc_offset;
		var timezone = eventMsg.user.time_zone;
		var isGeoEnabled = eventMsg.user.geo_enabled;
		var userLanguage = eventMsg.user.lang;
		var isContributorsEnabled = eventMsg.user.contributors_enabled;
		var isTranslator = eventMsg.user.is_translator;
		var profileBackgroundColor = eventMsg.user.profile_background_color;
		var profileBackgroundUrl = eventMsg.user.profile_background_image_url;
		var profileBackgroundUrlHttps = eventMsg.user.profile_background_image_url_https;
		var isProfileBackgroundTiled = eventMsg.user.profile_background_tile;
		var profileLinkColor = eventMsg.user.profile_link_color;
		var profileSidebarBorderColor = eventMsg.user.profile_sidebar_border_color;
		var profileSidebarFillColor = eventMsg.user.profile_sidebar_fill_color;
		var profileTextColor = eventMsg.user.profile_text_color;
		var profileImageUrl = eventMsg.user.profile_image_url;
		var profileImageUrlHttps = eventMsg.user.profile_image_url_https;
		var profileBannerUrl = eventMsg.user.profile_banner_url;
		var isDefaultProfile = eventMsg.user.default_profile;
		var isDefaultProfileImage = eventMsg.user.default_profile_image;
		var following = eventMsg.user.following;
		var followRequestSent = eventMsg.user.follow_request_sent;
		var notifications = eventMsg.user.notifications;

		//function arguments can be changed to suit the needed application
		action.tweetAction(username,replyToUserName,tweetId);
	},

	//parses the JSON data of any DM involving the bot and then acts accordingly using the actions module
	messaged : function (eventMsg){

		var messageId = eventMsg.direct_message.id_str;
		var messageText = eventMsg.direct_message.text;
		var messageCreationDate = eventMsg.direct_message.created_at;
		var messageHashtags = eventMsg.entities.hashtags;
		var messageSymbols = eventMsg.entities.symbols;
		var messageUserMentions = eventMsg.entities.user_mentions;
		var messageUrls = eventMsg.entities.urls;

		var senderId = eventMsg.direct_message.sender.id_str;
		var senderName = eventMsg.direct_message.sender.name; 
		var senderUsername = eventMsg.direct_message.sender.screen_name;
		var senderLocation = eventMsg.direct_message.sender.location;
		var senderUrl = eventMsg.direct_message.sender.url;
		var senderBio = eventMsg.direct_message.sender.description;
		var senderIsProtected = eventMsg.direct_message.sender.protected;
		var senderFollowCount = eventMsg.direct_message.sender.followers_count;
		var senderFollowingCount = eventMsg.direct_message.sender.friends_count;
		var senderListedCount = eventMsg.direct_message.sender.listed_count;
		var senderCreationDate = eventMsg.direct_message.sender.created_at;
		var senderFavedCount = eventMsg.direct_message.sender.favourites_count;
		var senderUtcOffset = eventMsg.direct_message.sender.utc_offset;
		var senderTimeZone = eventMsg.direct_message.sender.time_zone;
		var senderIsGeoEnabled = eventMsg.direct_message.sender.geo_enabled;
		var senderIsVerified = eventMsg.direct_message.sender.verified;
		var senderTweetCount = eventMsg.direct_message.sender.statuses_count;
		var senderLanguage = eventMsg.direct_message.sender.lang;
		var senderIsContributorsEnabled = eventMsg.direct_message.sender.contributors_enabled;
		var senderIsTranslator = eventMsg.direct_message.sender.is_translator;
		var senderIsTranslatorEnabled = eventMsg.direct_message.sender.is_translation_enabled;
		var senderProfileBackgroundColor = eventMsg.direct_message.sender.profile_background_color;
		var senderProfileBackgroundImageUrl = eventMsg.direct_message.sender.profile_background_image_url;
		var senderProfileBackgroundImageUrlHttps = eventMsg.direct_message.sender.profile_background_image_url_https;
		var senderIsProfileBackgroundTile = eventMsg.direct_message.sender.profile_background_tile;
		var senderProfileImageUrl = eventMsg.direct_message.sender.profile_image_url;
		var senderProfileImageUrlHttps =eventMsg.direct_message.sender.profile_image_url_https;
		var senderProfileBannerUrl = eventMsg.direct_message.sender.profile_banner_url;
		var senderProfileLinkColor = eventMsg.direct_message.sender.profile_link_color;
		var senderProfileSidebarBorderColor = eventMsg.direct_message.sender.profile_sidebar_border_color;
		var senderProfileSidebarFillColor = eventMsg.direct_message.sender.profile_sidebar_fill_color;
		var senderProfileTextColor = eventMsg.direct_message.sender.profile_text_color;
		var senderIsProfileUseBackgroundImage = eventMsg.direct_message.sender.profile_use_background_image;
		var senderIsDefaultProfile = eventMsg.direct_message.sender.default_profile;
		var senderIsDefaultProfileImage = eventMsg.direct_message.sender.default_profile_image;
		var senderIsFollowing = eventMsg.direct_message.sender.following;
		var senderIsFollowRequestSent = eventMsg.direct_message.sender.follow_request_sent;
		var senderIsNotifications = eventMsg.direct_message.sender.notifications;
		var senderTranslatorType = eventMsg.direct_message.sender.translator_type;


		var recipientId = eventMsg.direct_message.recipient.id_str;
		var recipientName = eventMsg.direct_message.recipient.name; 
		var recipientUsername = eventMsg.direct_message.recipient.screen_name;
		var recipientLocation = eventMsg.direct_message.recipient.location;
		var recipientUrl = eventMsg.direct_message.recipient.url;
		var recipientBio = eventMsg.direct_message.recipient.description;
		var recipientIsProtected = eventMsg.direct_message.recipient.protected;
		var recipientFollowCount = eventMsg.direct_message.recipient.followers_count;
		var recipientFollowingCount = eventMsg.direct_message.recipient.friends_count;
		var recipientListedCount = eventMsg.direct_message.recipient.listed_count;
		var recipientCreationDate = eventMsg.direct_message.recipient.created_at;
		var recipientFavedCount = eventMsg.direct_message.recipient.favourites_count;
		var recipientUtcOffset = eventMsg.direct_message.recipient.utc_offset;
		var recipientTimeZone = eventMsg.direct_message.recipient.time_zone;
		var recipientIsGeoEnabled = eventMsg.direct_message.recipient.geo_enabled;
		var recipientIsVerified = eventMsg.direct_message.recipient.verified;
		var recipientTweetCount = eventMsg.direct_message.recipient.statuses_count;
		var recipientLanguage = eventMsg.direct_message.recipient.lang;
		var recipientIsContributorsEnabled = eventMsg.direct_message.recipient.contributors_enabled;
		var recipientIsTranslator = eventMsg.direct_message.recipient.is_translator;
		var recipientIsTranslatorEnabled = eventMsg.direct_message.recipient.is_translation_enabled;
		var recipientProfileBackgroundColor = eventMsg.direct_message.recipient.profile_background_color;
		var recipientProfileBackgroundImageUrl = eventMsg.direct_message.recipient.profile_background_image_url;
		var recipientProfileBackgroundImageUrlHttps = eventMsg.direct_message.recipient.profile_background_image_url_https;
		var recipientIsProfileBackgroundTile = eventMsg.direct_message.recipient.profile_background_tile;
		var recipientProfileImageUrl = eventMsg.direct_message.recipient.profile_image_url;
		var recipientProfileImageUrlHttps =eventMsg.direct_message.recipient.profile_image_url_https;
		var recipientProfileBannerUrl = eventMsg.direct_message.recipient.profile_banner_url;
		var recipientProfileLinkColor = eventMsg.direct_message.recipient.profile_link_color;
		var recipientProfileSidebarBorderColor = eventMsg.direct_message.recipient.profile_sidebar_border_color;
		var recipientProfileSidebarFillColor = eventMsg.direct_message.recipient.profile_sidebar_fill_color;
		var recipientProfileTextColor = eventMsg.direct_message.recipient.profile_text_color;
		var recipientIsProfileUseBackgroundImage = eventMsg.direct_message.recipient.profile_use_background_image;
		var recipientIsDefaultProfile = eventMsg.direct_message.recipient.default_profile;
		var recipientIsDefaultProfileImage = eventMsg.direct_message.recipient.default_profile_image;
		var recipientIsFollowing = eventMsg.direct_message.recipient.following;
		var recipientIsFollowRequestSent = eventMsg.direct_message.recipient.follow_request_sent;
		var recipientIsNotifications = eventMsg.direct_message.recipient.notifications;
		var recipientTranslatorType = eventMsg.direct_message.recipient.translator_type;

		//function arguments can be changed to suit the needed application
  		action.messageAction(senderUsername,senderUserId,recipientUsername,messageText);
  		
	}

}