/* eslint-disable no-unused-vars */
const { Client, Message } = require('discord.js');
/**
 * JSDOC
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
module.exports.run = async (client, message, args) => {
	if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('I do not have `MANAGE_CHANNELS` permission!', { allowedMentions: { repliedUser: false } });
	if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You do not have `MANAGE_CHANNELS` permission!', { allowedMentions: { repliedUser: false } });
	const arg = message.content.split(' ').slice(1);
	const cd = arg[0];
	if (!cd) {
		return message.reply(
			'Please Give an amount of **Second(s)** to set slowmode!',
			{ allowedMentions: { repliedUser: false } },
		);
	}
	if (isNaN(cd)) {
		return message.reply(
			'Please give a valid amount of **Seconds** to set slowmode!',
			{ allowedMentions: { repliedUser: false } },
		);
	}
	if (cd > 21600) {
		return message.reply(
			'You can\'t set the Slowmode higher than 21600 seconds.',
			{ allowedMentions: { repliedUser: false } },
		);
	}
	if (cd < 0) {
		return message.reply(
			'You can\'t set the Slowmode Lower than 0 seconds',
			{ allowedMentions: { repliedUser: false } },
		);
	}
	else {
		message.channel.setRateLimitPerUser(cd);
		message.reply(
			`Successfully set the Slowmode to ${cd} Seconds in this Channel!`,
			{ allowedMentions: { repliedUser: false } },
		);
	}
};

module.exports.config = {
	name: 'slowmode',
	aliases: [],
};
