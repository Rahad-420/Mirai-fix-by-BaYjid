const fs = require("fs");
module.exports.config = {
	name: "mahim",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "brazil",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("মাহিম")==0 || event.body.indexOf("mahim")==0 || event.body.indexOf("Simu")==0 || event.body.indexOf("মাহিম")==0) {
		var msg = {
				body: "মাহিম মানেই আগুন🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/irfan8.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }