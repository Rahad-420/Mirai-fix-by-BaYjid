const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "gobot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ARIYAN",
  description: "gibot",
  commandCategory: "ai",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["💋"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "" ) || (event.body.toLowerCase() == "")) {
     return api.sendMessage("Like,Sticker,Pic & Video দিলে আমি তা অনুসন্ধান করতে পারি না ।  𝗠𝗔𝗛𝗜𝗠 Boss কে ডাকলে বুঝবে হয়তো", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("আগে ব্রাশ করে আই তারপর কিস কর নাহলে তোর মুখ থেকে গন্ধ বের হয়🤣",threadID);
   };
   
    if ((event.body.toLowerCase() == "prefix ") || (event.body.toLowerCase() == "Prefix ")) {
     return api.sendMessage("My prefix 👉/👈", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "Bye")) {
     return api.sendMessage("বাই তো বললে সোজা অফলাইনে যাও অন্য কারো ইনবক্সে যেও না গেলে আমার বস্ 𝗠𝗔𝗛𝗜𝗠এর ইনবক্সে যাও", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. এটা ছাড়া অন্য কথা বলে আড্ডা দিতে পারো না নাকি🥴", threadID);
   };

   if ((event.body.toLowerCase() == "__𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪𝙡𝙖𝙞𝙠𝙪𝙢🦋💚") || (event.body.toLowerCase() == "𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪𝙡𝙖𝙞𝙠𝙪𝙢🦋💚")) {
     return api.sendMessage("-𝗪𝗮𝗹𝗮𝗶𝗸𝘂𝗺 𝗮𝘀𝘀𝗮𝗹𝗮𝗺🌻🖤", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("নিজেকে অনেক লিজেন্ড ভাবো নাকি 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "everyone ") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("ami aci janeman❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Ariyan") || (event.body.toLowerCase() == "ariyan") || (event.body.toLowerCase() == "@ARIYAN CHOWDHURY") || (event.body.toLowerCase() == "@Ariyan Chowdhury ")) {
     return api.sendMessage( "Ariyan Nai Ami Aci Amk Bolo😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Admin")) {
     return api.sendMessage("‎[owner:👑 𝗠𝗔𝗛𝗜𝗠 𝗫𝗢𝗪𝗗𝗛𝗨𝗥𝗬 👑 You Can Call Him ARIYAN Contact Him on What's App :- 017-𝗧𝗢𝗥 𝗡𝗔𝗡𝗜𝗥 𝗛𝗘𝗗𝗔", threadID);
   };

   if ((event.body.toLowerCase() == "bot owner") || (event.body.toLowerCase() == "Bot Owner K")) {
     return api.sendMessage("𝗠𝗔𝗛𝗜𝗠 CHOWDHURY🌺❤️ My Creator. He loves me & Edit Me Daily. এই বট শুধুমাএ 𝗠𝗔𝗛𝗜𝗠 জন্য। আমাকে আপনাদের বিনোদন & হাসানোর জন্য বানানো হয়েছে🌺। সো সবাই মজা করো,হাসো এবং Enjoy কর ", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ar admin k ")) {
     return api.sendMessage("He is ARIYAN CHOWDHURY .uHe Gives his name KING everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "@Ariyan Chowdhury") || (event.body.toLowerCase() == "Irfan")) {
     return api.sendMessage("I love u🥰 amar boss 𝗠𝗔𝗛𝗜𝗠 apnake bollo🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Love u bot") || (event.body.toLowerCase() == "prem korba bot")) {
     return api.sendMessage("amake noi amar boss 𝗠𝗔𝗛𝗜𝗠 k valobashun oni amake create korcen ", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "tham") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Thambo na. 😼 ami kotha bolbo. Karo odikhar nai amake thamanor. Amar mukh diye ami kotha bolbo", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("তুই Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "Nunu") || (event.body.toLowerCase() == "nunu")) {
     return api.sendMessage("নুনুতে চুলকানি হয়েছে, সো কলা 🍌 ভিতরে নিয়ে নাও. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") (event.body.toLowerCase() == "Kiss Me") || || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️আমি সবাইকে কিস দিই না তাছাড়া তোর মুখ থেকে গন্ধ বের হচ্ছে আগে মুখ ধুয়ে আই তারপর বলিস😷", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️ami ki ato sundor sobai amake thank you dei🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("🥺রাগ করো না সোনা আমি শুধু মজা করছি। আচ্ছা একটা কিস নাও রাগ কমাও😘", threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "Hum") || (event.body.toLowerCase() == "hum") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm বললে কেন গো সোনা আমার সাথে প্রেম করবা নাকি আমার বস্ 𝗠𝗔𝗛𝗜𝗠 এর সাথে প্রেম করবা🙈", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️নামের মধ্যে কি আছে,কাজের কথা বলো", threadID);
   };

   if ((event.body.toLowerCase() == "Bot Hala") || (event.body.toLowerCase() == "Boter Bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার পেটে🥵", threadID);
   };

   if ((event.body.toLowerCase() == "Pic Dao") || (event.body.toLowerCase() == "photo dao")) {
     return api.sendMessage("️আমি তো অন্ধ,পিক দিয়ে কি করবা", threadID);
   };

   if ((event.body.toLowerCase() == "Naima Keda") || (event.body.toLowerCase() == "Naima K")) {
     return api.sendMessage("️𝘀𝗶𝗺𝘂 Holo 𝗠𝗔𝗛𝗜𝗠 er Bou🌺🥰😘😍😻", threadID);
   };

   if ((event.body.toLowerCase() == "Bot Banai Dao") || (event.body.toLowerCase() == "Bot Lagbe Amar")) {
     return api.sendMessage("️Inbox Bot Admin", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️তোমার মন ভালো নেই বুঝলাম কিন্তু হাসি মুখে থাকতে শিখে সোনা আমার বস্ 𝗠𝗔𝗛𝗜𝗠 এর মতো🤗😘", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️এদিক ওদিক তাকাও কেন? কেউ দেখছে না সোজা আমার বস্ 𝗠𝗔𝗛𝗜𝗠 এর ইনবক্সে দৌড় দাও🏃‍♀️💃", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "Valobase Na Amk Kew")) {
     return api.sendMessage("️কেউ তোমাকে ভালো না বাসলেও আমি তোমাকে ভালোবাসবো🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("ভিখারী হয়ে গেলে নাকি সোনা মাথায় হাত দাও কেন??😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("একটু কম করে হাসো সোনা 🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("তোমার চোখে এত ভালোবাসা দেখছি কেন?😒 আমার বস 𝗠𝗔𝗛𝗜𝗠 একটু ভলোবাসা দিও🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kemon aco") || (event.body.toLowerCase() == "kmn aco") || (event.body.toLowerCase() == "Kemon Aco") || (event.body.toLowerCase() == "How Are You") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("ami tokhon e valo thaki, Jokhon apnader hasi mukh dekhi☺️", threadID);
   };

   if ((event.body.toLowerCase() == "ami ariyan") || (event.body.toLowerCase() == "Me Ariyan")) {
     return api.sendMessage("Boss 𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪𝙡𝙖𝙞𝙠𝙪𝙢🦋💚", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "Mim") || (event.body.toLowerCase() == "mim")) {
     return api.sendMessage("𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪𝙡𝙖𝙞𝙠𝙪𝙢🦋💚 Naima vabi 🥰 oi todero vabi hoi salam de @everyone", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "Ami Ariyan") || (event.body.toLowerCase() == "Ami Tor Boss")) {
     return api.sendMessage("হ্যা বস্ 𝗠𝗔𝗛𝗜𝗠 কেমন আছেন,আর আমি জানি আপনি আমাকে তৈরি করেছেন, কিছু ভুল হলে মাফ করে দিয়েন🥰", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("kiss dao") == 0 || (event.body.indexOf("kiss de") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage("I love u baby ummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmaaaaaahhhh💋💋💋💋💋💋💋💋💋💋💋💋💋💋", threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
