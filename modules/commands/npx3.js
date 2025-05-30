const fs = require("fs");
module.exports.config = {
	name: "npxloveking",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😍",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🚸")==0 || event.body.indexOf("⛔")==0 || event.body.indexOf("⚠️")==0 || event.body.indexOf("🚸")==0 || event.body.indexOf("🎉")==0 || event.body.indexOf("🧧")==0 || event.body.indexOf("🏐")==0 || event.body.indexOf("🏀")==0 || event.body.indexOf("🏒")==0 || event.body.indexOf("👣")==0 || event.body.indexOf("🦍")==0 || event.body.indexOf("🦧")==0 || event.body.indexOf("🐕")==0 || event.body.indexOf("🦒")==0 || event.body.indexOf("🦣")==0 || event.body.indexOf("🐤")==0 || event.body.indexOf("🐍")==0 || event.body.indexOf("🐟")==0 || event.body.indexOf("🌼")==0 || event.body.indexOf("🌾")==0 || event.body.indexOf("💮")==0 || event.body.indexOf("🪷")==0 || event.body.indexOf("🍀")==0 || event.body.indexOf("🍂")==0 || event.body.indexOf("🍃")==0 || event.body.indexOf("🌿")==0 || event.body.indexOf("☘️")==0 || event.body.indexOf("🍰")==0 || event.body.indexOf("🏆")==0 || event.body.indexOf("🔥")==0 || event.body.indexOf("⭐")==0 || event.body.indexOf("🌟")==0 || event.body.indexOf("🚲")==0 || event.body.indexOf("😾")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("✅")==0 || event.body.indexOf("🔰")==0 ||  event.body.indexOf("❌")==0 || event.body.indexOf("❎")==0 || event.body.indexOf("👻")==0 || event.body.indexOf("✨")==0 || event.body.indexOf("⛳")==0 || event.body.indexOf("⛸️")==0 || event.body.indexOf("🧿")==0 || event.body.indexOf("🎭")==0 || event.body.indexOf("🎨")==0 ||event.body.indexOf("♥️")==0 || event.body.indexOf("♦️")==0 || event.body.indexOf("🧸")==0 || event.body.indexOf("🧶")==0 || event.body.indexOf("♟️")==0 ||
event.body.indexOf("🎯")==0 || event.body.indexOf("🥅")==0) {
		var msg = {
				body: "বস 一 ཐི༏ཋྀpiŋik BAYJID ཐི༏ཋྀ一 চৌধুরি আপনার জন্য গানটি রেখেছেন😌",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/ariyan3.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }