const fs = require("fs");
module.exports.config = {
	name: "npxs1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ARIYAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😄")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("😃")==0 || event.body.indexOf("😀")==0) {
		var msg = {
				body: "-এই অল্প বয়সে বড্ড ক্লান্ত আমি আরিয়ান 😥😔♦",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/irfan10.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }