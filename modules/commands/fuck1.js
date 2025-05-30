const fs = require("fs");

module.exports.config = {

 name: "funny",

    version: "1.0.1",

 hasPermssion: 0,

 credits: "MR CHAND", 

 description: "no prefix",

 commandCategory: "No command marks needed",

 usages: "...",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

 var { threadID, messageID } = event;

 if (event.body.indexOf("Fuck")==0 || (event.body.indexOf("ফাক")==0 || (event.body.indexOf("fuck")==0 || (event.body.indexOf("Xudi")==0)))) {

  var msg = {

    body: "🍌Your Gf Fuck Him-🤙",

    attachment: fs.createReadStream(__dirname + `/noprefix/fuck.png`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}