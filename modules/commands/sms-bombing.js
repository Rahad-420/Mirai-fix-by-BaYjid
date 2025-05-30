module.exports.config = {
    name: "sms",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ARIYAN", //public by Ariyan
    description: "SMS BOMBING",
    commandCategory: "SMS BOMBER",
    usages: "sms [number]",
    cooldowns: 10,
    dependencies: {
        "canvas": "",
        "axios": "",
        "fs-extra": "",
        "https": ""
    }
}; 

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;
    const text = args.join(" ");

    if (!text) {
        return api.sendMessage("Enter the number ", threadID, messageID);
    }

    api.sendMessage("𝐒𝐌𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋\n𝐄𝐃𝐈𝐓𝐎𝐑 : 𝗠𝗔𝗛𝗜𝗠 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬", threadID, messageID);
    
    const url = `https://sms-api-ashy.vercel.app/api/test.php?number=${text}`;
    const https = require('https');

    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const formattedData = data.replace(/<br>/g, "\n");
            api.sendMessage(formattedData, threadID, messageID);
        });
    }).on('error', (err) => {
        console.error(err);
    });
};