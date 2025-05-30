/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hotv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ariyan",
  description: "HOT VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["এইভাবে খেলবো তোমার সাথে 𝐂𝐫𝐞𝐝𝐢𝐭 : 𝗔𝗥𝗜𝗬𝗔𝗡 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W",
    "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3",
    "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_",
    "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0",
    "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR",
    "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-",
    "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg",
    "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu",
    "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i",
    "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V",
    "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91",
    "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb",
    "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9",
    "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC",
    "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp",
    "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L",
    "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f",
    
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };