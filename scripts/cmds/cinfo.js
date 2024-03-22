const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "owner"],
    version: "2.0",
    author: "𝖠𝗒𝖺𝗇",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "⇛⌘ 𝖲 𝖠 𝖭 𝖭 𝖸 𝐑𝐎𝐁𝐎𝐓 𝐕 5.𝟎 ⌘⇚";
    const botPrefix = ".";
    const authorName = "𝖲 𝖠 𝖭 𝖭 𝖸シ︎";
    const authorFB = "https://www.facebook.com/profile.php?id=100057678948022";
    const authorInsta = "secret";
    const status = "𝐈 𝐇𝐀𝐓𝐄 𝐋𝐎𝐕𝐄";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/Ariyan.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `
≡≡║Bot & Owner Info║≡≡
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

➠Bot Name↠ ${botName}

➠Bot Prefix↠ ${botPrefix}

➠Owner Name↠ ${authorName}

➠Facebook↠ ${authorFB}

➠Instagram↠ ${authorInsta}

➠Status↠ ${status}

➠Date↠ ${date}

➠Time↠ ${time}

➠Uptime↠ ${uptimeString}

﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋
Thanks for using ↠\n⇛⌘ 𝖲 𝖠 𝖭 𝖭 𝖸 𝐑𝐎𝐁𝐎𝐓 𝐕 5.𝟎 ⌘⇚
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
