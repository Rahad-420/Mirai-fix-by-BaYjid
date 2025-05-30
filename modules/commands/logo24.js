const API = "https://ariyan.ariyanvao.repl.co/api/textpro?number=24&text="
module.exports.config = {
	name: "logo24",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ARIYAN",
	description: "logo",
	commandCategory: "text maker",
	usages: "...",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits != "ARIYAN") {
        console.log("[ WARNING ] » Change credited Fuck You By ARIYAN :p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("× [ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ] × 𝐋𝐎𝐋 𝐂𝐑𝐄𝐃𝐈𝐓 𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐅𝐔𝐂𝐊 𝐘𝐎𝐔𝐑 𝐒𝐈𝐒𝐓𝐄𝐑 𝐁𝐘 𝐀𝐑𝐈𝐘𝐀𝐍 😹🖐🏻" , event.threadID, event.messageID);
}
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝟱 𝐒𝐄𝐂𝐎𝐍𝐃", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: "♻️ 𝐄𝐃𝐈𝐓𝐎𝐑 𝗔𝗥𝗜𝗬𝗔𝗡 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 ♻️", attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};