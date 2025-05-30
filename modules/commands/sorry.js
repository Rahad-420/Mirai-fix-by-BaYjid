const fs = require("fs");
module.exports.config = {
	name: "hasi78",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Ariyan", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("🙏") ||
     react.includes("sorry") || 
     react.includes("Sorry") || 
react.includes("sry") || 
react.includes("সরি") ||
react.includes("Sry")) {
		var msg = {
		    body: "মানুষ মাত্রই ভুল,আর ক্ষমা করে দেওয়া মহান ব্যাক্তির কাজ🥰"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }