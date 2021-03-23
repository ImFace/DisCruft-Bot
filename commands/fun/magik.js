module.exports.run = async (client, message, args) => {
let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({
          format: 'png',
          dynamic: false,
          size: 128
        })
        message.channel.send('Loading...')
        const e = Math.floor(Math.random() * 10) +1
          const res = `https://nekobot.xyz/api/imagegen?type=magik&image=${avatar}&intensity=${e}&raw=1`
          const embed = new Discord.MessageEmbed()
          .setImage(res)
          .setColor('#303030')
          message.channel.send(embed);
};
module.exports.config = {
	name: 'magik',
	aliases: [],
};
