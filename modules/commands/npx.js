const fs = require("fs");
module.exports.config = {
        name: "hotyd",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "\u0041\u0075\u0074\u006f \u0072\u0065\u0061\u0063\u0074\u0069\u006f\u006e \u006d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (this.config.credits != '\u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » \u0043\u0072\u0065\u0064\u0069\u0074\u0073 \u0068\u0061\u0073 \u0062\u0065\u0065\u006e \u0063\u0068\u0061\u006e\u0067\u0065\u0064\u0021 \u0053\u0074\u006f\u0070 \u004e\u006f\u0077\u0021'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] \u0053\u0054\u004f\u0050 \u0043\u0048\u0041\u004e\u0047\u0049\u004e\u0047 \u0043\u0052\u0045\u0044\u0049\u0054\g \u0049\u0044\u0049\u004f\u0054 ' , event.threadID, event.messageID);
      }
  if (haha.includes("lol") || haha.includes("😂") || haha.includes("haha") || haha.includes("pagal") || haha.includes("mental") || haha.includes("oye") || haha.includes("love") || haha.includes("jani") || haha.includes("bc") || haha.includes("group") || haha.includes("kis") || haha.includes("kuta") || haha.includes("jan") || haha.includes("oh")){                 
    return api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("death") || haha.includes("mar") || haha.includes("udas") || haha.includes("☹️") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("🥵") || haha.includes("umah") || haha.includes("💋") || haha.includes("kiss") || haha.includes("babu") || haha.includes("wow") || haha.includes("wah") || haha.includes("relationship") || haha.includes("gf") || haha.includes("baby") || haha.includes("omg")){
    return api.setMessageReaction("😘", event.messageID, (err) => {}, true)
        }
  if (haha.includes("call") || haha.includes("Call")){
    api.setMessageReaction("OYE", event.messageID, (err) => {}, true)
    api.sendMessage("-/GF দেও কলে আসমু😁", event.threadID,event.messageID);
  }
  if (haha.includes("boyfriend") || haha.includes("bf")){
    api.sendMessage("খাল কেটে কুমির আনতে চাও নাকি😑🐸!", event.threadID, event.messageID)
  }
  if (haha.includes("mari") || haha.includes("mare")){
    api.sendMessage("Tor potita mare putki mari🖕🌶️", event.threadID, event.messageID)
  }
  if (haha.includes("https:") || haha.includes(".com")){
    api.sendMessage("_ আড্ডা গ্রুপে BAYJID এর পারমিশন সারা লিঙ্ক চূদাও কেন🙄🐰", event.threadID, event.messageID)
  }
if (haha.includes("@everyone") || haha.includes("everyone")){
    api.sendMessage("সবার সাথে কথা বলতে চাইলে আমার সাথে কথা বলা লাগবে না তো🔨😑", event.threadID, event.messageID)
}
if (haha.includes("send a voice") || haha.includes("downloading")){
    api.sendMessage("সর বাইঞ্চুদ আমার নেট স্পিড তোর মতো না😹😹", event.threadID, event.messageID)
}
  if (haha.includes("👠") || haha.includes("👡")){
    api.sendMessage("_ নে সেন্ডেল এর বারি খা😆\n\n\n👠👡👠👠👠👠👠👡👡👡👡👠👡👠👡👡👠👡👠👡👠👡👠👡", event.threadID, event.messageID)
      }   
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
      }