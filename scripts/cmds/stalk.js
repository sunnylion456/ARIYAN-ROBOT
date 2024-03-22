https://api-samir.onrender.com/Hastebin?text=module.exports = {
    config: {
        name: "stalk",
        author: "EUGENE | AYAN",
        version: "1.5",
        countDown: 5,
        role: 0,
        guide: "[reply/uid/@mention]",
        category: "info",
        shortDescription: {
            en: "Get info using uid/mention/reply to a message"
        }
    },

    onStart: async function({ api, event, args }) {
        try {
            const axios = require('axios');
            const fs = require("fs-extra");
            const request = require("request");
            const { threadID, senderID, messageID } = event;

            let id;
            if (args.join().indexOf('@') !== -1) {
                id = Object.keys(event.mentions);
            } else {
                id = args[0] || event.senderID;
            }

            if (event.type == "message_reply") {
                id = event.messageReply.senderID;
            }

            const res = await axios.get(`https://eurix-api.replit.app/info?uid=${id}`);
            const { username, name, gender, relationship, love, uid, link, followers, birthday, hometown, location } = res.data;
            const avatar = `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

            const callback = function() {
                return api.sendMessage({
                    body: `•——[INFORMATION]——•\n\nName: ${name}\nFacebook URL: ${link}\nUsername or ID: ${username}\nBirthday: ${birthday}\nFollowers: ${followers}\nGender: ${gender}\nUID: ${uid}\nLocation: ${location}\nHometown: ${hometown}\nRelationship Status: ${relationship}\nIn relationship with: ${love}\n\n•——[INFORMATION]——•`,
                    attachment: fs.createReadStream(__dirname + `/cache/image.png`)
                }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
            };

            return request(encodeURI(avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
        } catch (err) {
            console.log(err);
            return api.sendMessage(`Error`, event.threadID);
        }
    }
    }
