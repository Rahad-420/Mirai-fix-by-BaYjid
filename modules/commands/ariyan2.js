const fs = require("fs");
module.exports.config = {
	name: "king",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bayjid")==0 || event.body.indexOf("bayjid")==0 || event.body.indexOf("BAYJID")==0 || event.body.indexOf("Bayjid")==0) {
		var msg = {
				body: "𝐌𝐲 𝐁𝐨𝐬𝐬 MBayjid 𝗖𝗵𝗼𝘄𝗱𝗵𝘂𝗿𝘆 \n\n\n👉𝐂𝐨𝐧𝐭𝐚𝐜𝐭🌺 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 : https://www.facebook.com/profile.php?id=100065506668822\n\n🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 2 : https://www.facebook.com/profile.php?id=100065506668822\n\n🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 3 : NOT ALLOED \n\n 🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 4 : https://www.facebook.com/profile.php?id=100065506668822\n\n 🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 5 : https://www.facebook.com/100065506668822\n\n 🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 6 : https://www.facebook.com/profile.php?id=100065506668822",
				attachment: fs.createReadStream(__dirname + `/noprefix/bossariyan.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }