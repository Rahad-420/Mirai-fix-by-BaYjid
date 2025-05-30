module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Rup Kumar",
	description: "Get your user ID",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`𝐘𝐨𝐮𝐫 𝐔𝐈𝐃 : \n${event.senderID}\n\n𝐘𝐨𝐮𝐫 𝐌𝐞𝐬𝐬𝐚𝐧𝐠𝐞𝐫 𝐂𝐡𝐚𝐭 𝐋𝐢𝐧𝐤 :\nm.me/${event.senderID}\n\n𝐘𝐨𝐮𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐋𝐢𝐧𝐤 :\nwww.facebook.com/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }