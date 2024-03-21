const axios = require('axios');

module.exports = {
  config: {
    name: "fbcover",
    aliases: ['fbc','fbcover'],
    version: "2.0",
    author: "𝐀𝐘𝐀𝐍", 
    countDown: 5,
    role: 0,
    shortDescription: "Create fb Cover photo",
    longDescription: "Create fb Cover photo",
    category: "Cover",
    guide: {
      en: `{pn} v<version_number> - <name> - <subname> - <address> - <number> - <email> - <color>

Example ⇒ {pn} v2 - ARIYAN - NOOB - FARIDPUR - 01_______40 - ariyankhan99@gmail.com - blue

You can make 11 types of covers (v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11)
`,
    }
  },

  onStart: async function ({ message, args, event, api, getLang }) {
    try {
      const info = args.join(" ");

      if (!info) {
        await api.sendMessage(`
⚠️ | Please enter in the format:

.fbcover v<version_number> - <name> - <subname> - <address> - <number> - <email> - <color>

Example ⇒ .fbcover v2 - RUBISH - NOOB - CHITTAGONG - 01_______69 - rubish404@gmail.com - green

You can make 11 types of covers {v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11}

`, event.threadID);
        return;
      }

      // Determine the UID to reply to
      let uid;
      if (event.type === 'message_reply') {
        uid = event.messageReply.senderID;
      } else {
        uid = Object.keys(event.mentions)[0] || event.senderID;
      }

      const loadingMessage = await api.sendMessage("⏳ | Creating Your Facebook Cover...", event.threadID);

      const defaultValues = {
        name: "DefaultName",
        subname: "DefaultSubname",
        address: "DefaultAddress",
        number: "DefaultNumber",
        email: "DefaultEmail",
        color: "DefaultColor",
        v: "v9" // Default version is set to v1
      };

      const validVersions = new Set(['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10','v11']);

      const [v, name, subname, address, number, email, color] = info.split("-").map(item => item.trim());

      const version = validVersions.has(v.toLowerCase()) ? v.trim() : defaultValues.v;

      const bodyMessage = `
✅ | Successfully Created Your FB Cover
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

⦿ Name: ${name}
⦿ Subname: ${subname}
⦿ Address: ${address}
⦿ Number: ${number}
⦿ Email: ${email}
⦿ Color: ${color}
⦿ Version: ${version}
`;

      const imgEndpoint = `https://fb-cover-rubish-api-host.onrender.com/rubish/${version}?name=${name}&subname=${subname}&number=${number}&address=${address}&email=${email}&colour=${color}&uid=${uid}&apikey=rubish69`;

      const form = {
        body: bodyMessage
      };

      form.attachment = [];
      form.attachment[0] = await global.utils.getStreamFromURL(imgEndpoint);

      const completionMessage = await api.sendMessage(form, event.threadID);

      if (loadingMessage && loadingMessage.messageID) {
        await api.unsendMessage(loadingMessage.messageID);
      }
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      let errorMessages = '';
      if (error.response) {
        if (error.response.status === 404) {
          await message.reply("❌ | The requested resource was not found.");
          return;
        } else if (error.response.status === 401) {
          await message.reply(`❌ | Unauthorized. Invalid your APIKEY\n\nContact with Rubish to get new APIKEY\n\nFACEBOOK=>www.facebook.com/I.LOVE.YOU.MY.HATER`);
          return;
        }
        if (error.response.data && error.response.data.error && error.response.data.error.message) {
          errorMessages = error.response.data.error.message;
        }
      }
      if (errorMessages) {
        await message.reply(`⚠️ | Server error details:\n\n${errorMessages}`);
      } else {
        await message.reply("❌ | An error occurred while processing your request. Please try again later.");
      }
    }
  }
};
