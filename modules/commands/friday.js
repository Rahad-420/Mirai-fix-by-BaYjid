const fs = require("fs");
module.exports.config = {
	name: "friday",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes(" জুমা মোবারক") ||
     react.includes("জুম্মা মোবারক") || 
react.includes("Holy day") ||
react.includes("Jumma mubarak") ||  
react.includes("Juma mubarak") ||
react.includes("holy day")) {
		var msg = {
				body: "🕌┏━━━━ ﷽━━━━┓🕌\n\n📿𝐉𝐮𝐦𝐦𝐚 𝐌𝐮𝐛𝐚𝐫𝐚𝐤📿\n\n🕌┗━━━━ ﷽━━━━┛🕌\n\n\n𝐈𝐭'𝐬 𝐅𝐫𝐢𝐝𝐚𝐲! ❤\n\n\n𝐌𝐚𝐲 𝐀𝐥𝐥𝐚𝐡 𝐒𝐡𝐨𝐰𝐞𝐫 𝐇𝐢𝐬 𝐂𝐨𝐮𝐧𝐭𝐥𝐞𝐬𝐬 𝐁𝐥𝐞𝐬𝐬𝐢𝐧 𝐀𝐬 𝐎𝐧 𝐘𝐨𝐮 𝐀𝐧𝐝 𝐘𝐨𝐮𝐫 𝐅𝐚𝐦𝐢𝐥𝐲 𝐎𝐧 𝐓𝐡𝐢𝐬 𝐇𝐨𝐥𝐲 𝐃𝐚𝐲.\n\n\n♥︎𝐉𝐮𝐦𝐦𝐚 𝐦𝐮𝐛𝐚𝐫𝐚𝐤♥︎\n\n人\n(___)\n_ ;,,,,,,;,\n_║∩║_____   人\n_║∩║____ .-:'''"''":-.\n_║∩║___ (*(*(*|*)*)\n_║∩║____║∩∩∩║\n▊▊▊▊▊▊▊▊▊▊▊▊▊▊\n\n🌃🕋✨𝐉𝐮𝐦𝐦𝐚 𝐌𝐮𝐛𝐚𝐫𝐚𝐤✨ 🕋🌃"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }