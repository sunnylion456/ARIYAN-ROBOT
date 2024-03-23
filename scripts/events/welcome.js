const { getTime, drive } = global.utils;
if (!global.temp.welcomeEvent)
	global.temp.welcomeEvent = {};

module.exports = {
	config: {
		name: "welcome",
		version: "1.7",
		author: "NTKhang",
		category: "events"
	},

	langs: {
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			welcomeMessage: "Cảm ơn bạn đã mời tôi vào nhóm!\nPrefix bot: %1\nĐể xem danh sách lệnh hãy nhập: %1help",
			multiple1: "bạn",
			multiple2: "các bạn",
			defaultWelcomeMessage: "Xin chào {userName}.\nChào mừng bạn đến với {boxName}.\nChúc bạn có buổi {session} vui vẻ!"
		},
		en: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "🤖 𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐣𝐨𝐢𝐧𝐢𝐧𝐠 𝐦𝐞 ✅\n \n𝐌𝐲 𝐛𝐨𝐬𝐬 𝐢𝐬 𝖲 𝖠 N 𝖭 𝖸\n \n📝𝐓𝐡𝐢𝐬 𝐢𝐬 𝐦𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 : =\n \n𝐒𝐞𝐞 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐛𝐲 𝐰𝐫𝐢𝐭𝐢𝐧𝐠 𝐡𝐞𝐥𝐩 📝\n \n𝐖𝐞 𝐮𝐬𝐞 𝐚𝐧𝐝 𝐭𝐞𝐚𝐜𝐡📝\n \n𝐈 𝐰𝐢𝐥𝐥 𝐟𝐥𝐢𝐫𝐭 𝐰𝐢𝐭𝐡 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐚𝐧𝐝 𝐧𝐨 𝐨𝐧𝐞 𝐰𝐢𝐥𝐥 𝐦𝐢𝐧𝐝⏳🗿⌛\n \n𝐄𝐧𝐣𝐨𝐲 𝐮𝐬𝐢𝐧𝐠 𝐦𝐞🚀\n \n𝐈𝐟 𝐭𝐡𝐞𝐫𝐞 𝐢𝐬 𝐚𝐧𝐲 𝐩𝐫𝐨𝐛𝐥𝐞𝐦 𝐭𝐞𝐥𝐥 𝖲 𝖠 𝖭 𝖭 𝖸シ︎ 𝐁𝐎𝐒𝐒 𝐭𝐨 𝐡𝐢𝐦🌈\n \n𝐍𝐨 𝐨𝐧𝐞 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐡𝐮𝐫𝐭 𝐛𝐲 𝐦𝐲 𝐰𝐨𝐫𝐝𝐬, 𝐣𝐮𝐬𝐭 𝐬𝐚𝐲 𝐰𝐡𝐚𝐭 𝐈 𝐭𝐞𝐚𝐜𝐡🖇💻\n \n𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐦𝐞 📝 🌈",
			multiple1: "you",
			multiple2: "you guys",
			defaultWelcomeMessage: `💗𝐇𝐞𝐥𝐥𝐨__________________🗿\n{userName}\n \n𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐜𝐡𝐚𝐭 𝐛𝐨𝐱👋\{boxName}\n \n𝐆𝐞𝐭 𝐭𝐨 𝐤𝐧𝐨𝐰 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩☺️\n \n𝐈 𝐮𝐬𝐞 𝐚 𝐜𝐡𝐚𝐭 𝐛𝐨𝐭 𝐦𝐞🗿\n \n𝐓𝐲𝐩𝐞 𝐇𝐞𝐥𝐩 𝐚𝐧𝐝 𝐬𝐞𝐞 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬📝🚀\n \n𝐏𝐥𝐞𝐚𝐬𝐞 𝐝𝐨𝐧'𝐭 𝐦𝐢𝐧𝐝 𝐢𝐟 𝐈 𝐦𝐚𝐝𝐞 𝐚𝐧𝐲 𝐦𝐢𝐬𝐭𝐚𝐤𝐞𝐬📝\n \n𝐈𝐟 𝐈 𝐡𝐚𝐯𝐞 𝐚𝐧𝐲 𝐩𝐫𝐨𝐛𝐥𝐞𝐦 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝖲 𝖠 𝖭 𝖭 𝖸 𝐁𝐎𝐒𝐒🗿\n \n𝐄𝐧𝐣𝐨𝐲 𝐮𝐬𝐢𝐧𝐠 𝐦𝐞 𝐭𝐡𝐚𝐧𝐤𝐬🌈`
		}
	},

	onStart: async ({ threadsData, message, event, api, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				// if new member is bot
				if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					return message.send(getLang("welcomeMessage", prefix));
				}
				// if new member:
				if (!global.temp.welcomeEvent[threadID])
					global.temp.welcomeEvent[threadID] = {
						joinTimeout: null,
						dataAddedParticipants: []
					};

				// push new member to array
				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				// if timeout is set, clear it
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

				// set new timeout
				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
					const threadData = await threadsData.get(threadID);
					if (threadData.settings.sendWelcomeMessage == false)
						return;
					const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
					const dataBanned = threadData.data.banned_ban || [];
					const threadName = threadData.threadName;
					const userName = [],
						mentions = [];
					let multiple = false;

					if (dataAddedParticipants.length > 1)
						multiple = true;

					for (const user of dataAddedParticipants) {
						if (dataBanned.some((item) => item.id == user.userFbId))
							continue;
						userName.push(user.fullName);
						mentions.push({
							tag: user.fullName,
							id: user.userFbId
						});
					}
					// {userName}:   name of new member
					// {multiple}:
					// {boxName}:    name of group
					// {threadName}: name of group
					// {session}:    session of day
					if (userName.length == 0) return;
					let { welcomeMessage = getLang("defaultWelcomeMessage") } =
						threadData.data;
					const form = {
						mentions: welcomeMessage.match(/\{userNameTag\}/g) ? mentions : null
					};
					welcomeMessage = welcomeMessage
						.replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
						.replace(/\{boxName\}|\{threadName\}/g, threadName)
						.replace(
							/\{multiple\}/g,
							multiple ? getLang("multiple2") : getLang("multiple1")
						)
						.replace(
							/\{session\}/g,
							hours <= 10
								? getLang("session1")
								: hours <= 12
									? getLang("session2")
									: hours <= 18
										? getLang("session3")
										: getLang("session4")
						);

					form.body = welcomeMessage;

					if (threadData.data.welcomeAttachment) {
						const files = threadData.data.welcomeAttachment;
						const attachments = files.reduce((acc, file) => {
							acc.push(drive.getFile(file, "stream"));
							return acc;
						}, []);
						form.attachment = (await Promise.allSettled(attachments))
							.filter(({ status }) => status == "fulfilled")
							.map(({ value }) => value);
					}
					message.send(form);
					delete global.temp.welcomeEvent[threadID];
				}, 1500);
			};
	}
};
