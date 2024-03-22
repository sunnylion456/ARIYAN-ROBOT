const axios = require('axios');
const fs = require('fs');
const request = require('request');

module.exports = {
    config: {
        name: "stalk",
        author: "EUGENE | AYAN",
        version: "1.5",
        countDown: 5,
        role: 0,
        guide: "[reply/uid/@mention]",
        category: "info",
        shortDescription: {
            en: "Get info using UID/mention/reply to a message"
        }
    },

    onStart: async function({ api, event, args }) {
        try {
            const { threadID, senderID, messageID } = event;
            let id;

            // Determine the ID to use based on the input
            if (args.join().indexOf('@') !== -1) {
                id = Object.keys(event.mentions);
            } else if (event.type === "message_reply") {
                id = event.messageReply.senderID;
            } else {
                id = args[0] || senderID;
            }

            // Fetch user information
            const res = await axios.get(`https://eurix-api.replit.app/info?uid=${id}`);
            const { username, name, gender, relationship, love, uid, link, followers, birthday, hometown, location } = res.data;
            const avatar = `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

            // Download user avatar and send message
            const imageFileName = __dirname + `/cache/image_${id}.png`;
            const imageStream = fs.createWriteStream(imageFileName);
            request(encodeURI(avatar)).pipe(imageStream).on('close', () => {
                api.sendMessage({
                    body: `•——[INFORMATION]——•\n\nName: ${name}\nFacebook URL: ${link}\nUsername or ID: ${username}\nBirthday: ${birthday}\nFollowers: ${followers}\nGender: ${gender}\nUID: ${uid}\nLocation: ${location}\nHometown: ${hometown}\nRelationship Status: ${relationship}\nIn relationship with: ${love}\n\n•——[INFORMATION]——•`,
                    attachment: fs.createReadStream(imageFileName)
                }, threadID, () => {
                    // Remove the image file after sending
                    fs.unlink(imageFileName, (err) => {
                        if (err) console.error(err);
                    });
                }, messageID);
            });
        } catch (err) {
            console.error(err);
            api.sendMessage(`Error`, event.threadID);
        }
    }
};
