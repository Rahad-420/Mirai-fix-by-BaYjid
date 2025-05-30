module.exports.config = {
  name: "goimnbot",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100065506668822") {
    var aid = ["100065506668822"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [ " আার পারলামনা Bot Bot করতে করতে এখন মেনশন দেয়া শুরু করছে 🙂"," মেনশন না দিয়ে বলো কি বলবা🫠 "," আছি আছি এতো মেনশন দিতে হবেনা😌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                                                   }