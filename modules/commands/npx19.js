  const fs = require("fs");
module.exports.config = {
	name: "🇧🇩",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🤰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😌")==0 || event.body.indexOf("🌺")==0 ||
event.body.indexOf("😍")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("😳")==0 || event.body.indexOf("😘")==0) {
		var msg = {
				body: "প্রত্যেক অসফলতার পর যদি আপনার সফল হওয়ার ইচ্ছা আরো দৃঢ় হয়, তাহলে বুঝবেন আপনি একদিন সফল হবেন🙆‍♂️💘",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/irfan7.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }.