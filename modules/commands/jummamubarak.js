module.exports.config = {
  name: "jummamubarak",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "EMRAN HACKER",
  description: "Simple Banglish Ai Chatbot",
  commandCategory: "Ai Robot",
  usages: "/polo [typeinBanglish]",
  cooldowns: 2,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
	
	const axios = require('axios');
	
if (args.join() == "") { 
	  return api.sendMessage(`

"┏━━━━━━ ﷽ ━━━━━━┓
  🖤𝐉𝐮𝐦𝐦𝐚 𝐌𝐮𝐛𝐚𝐫𝐚𝐤🕋
 ┗━━━━━━ ﷽ ━━━━━━┛

┏━━━━━━━ ﷽ ━━━━━━┓
 💞📿জুম্মা মোবারক📿💞
┗━━━━━━━ ﷽ ━━━━━━┛
      🕋🕋
❤︎𝐇𝐚𝐩𝐩𝐲 𝐅𝐫𝐢𝐝𝐚𝐲 •☾︎✯️🥀
   ♡︎ 𝐓𝐨 𝐀𝐥𝐥 𝐦𝐮𝐬𝐥𝐢𝐦.🤲❣️
           
         •••• 𝐌𝐚𝐲 𝐀𝐥𝐥𝐚𝐡 𝐫𝐞𝐦𝐨𝐯𝐞 𝐚𝐥𝐥 𝐲𝐨𝐮𝐫 𝐩𝐚𝐢𝐧 ••••
 ♣••||| 𝐀𝐧𝐝  𝐀𝐜𝐜𝐞𝐩𝐭  𝐚𝐥𝐥 𝐲𝐨𝐮𝐫 𝐬𝐢𝐥𝐞𝐧𝐭 𝐩𝐫𝐚𝐲𝐞𝐫' 𝐬 |||
        👉  𝐉𝐮𝐦𝐦𝐚  𝐌𝐮𝐛𝐚𝐫𝐚𝐤 ___||•••• ❤🕋

 🕌🌹🌺السلام عليكم ورحمۃالله وبركاته🌺🌹🕌
                  📿༊-জুম্মা মোবারকッ༉📿
           [━━━━ ﷽ ━━━━]
                  <𝐉𝐮𝐦𝐦𝐚𝐡৺𝐌𝐮𝐛𝐚𝐫𝐚𝐤 >
  🥀༊সপ্তাহের❣︎দিনগুলোর❣মধ্যে❣︎
       ❥❛❛সর্বোত্তম❥❣︎ দিন ❥❣হলো'シ🥀
!ლ🌼 জুম্মার দিন࿐"

"❤আসসালামু আলাইকুম❤
💜🥰সবাইকে💜💜
💕🍃🌹🍃💕
💕.•°``°•.¸.•°``°•.💕
💕(জুম্মা মোবারক💕
💕`•.¸   💗   ¸.•` 💕
     💕° •.¸¸.•° 💕  
           💕💕 
             💕  💕
┌─────♣─────┐
😘জুম্মা মোবারক♦
└─────♣─────┘
         🌹🍃🌹🍃
     💜জুম্মা মোবারক💜
　　   ┊┊┊┊┊      
　  　 ┊┊┊┊💚  
　　   ┊┊┊💚    
　　   ┊┊💚         
　　   ┊💚          
　　  💚
💗Jumma Mubarak💗
💗-",':,-💗
ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖၸۣۣۣۣۣ🎸ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖၸۣۣۣۣۣ🎸ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖၸۣۣۣۣۣ🎸ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖၸۣۣۣۣۣ🎸ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖၸۣۣۣ ♥▓█▃▃▃▃▃▃▃█▓♥ ♥▓█▔▔▔▔▔▔▔█▓♥ ❥❥══❥𝗝𝘂𝗺𝗺𝗮𝗵 𝗠𝘂𝗯𝗮𝗿𝗮𝗸"`, event.threadID, event.messageID)}
  
	else {
		let uint = encodeURI(args.join(' '));
	const res = await axios.get(`https://simsimi.info/api/?text=${uint}&lc=bn`);
	var d1 = res.data.message
	return api.sendMessage(`${d1}`, event.threadID, event.messageID)
	
	}
		
	
	
      }