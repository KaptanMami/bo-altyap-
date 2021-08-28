const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username + " Adlı kullanıcı tarafından istendi.",message.author.avatarURL)
.setThumbnail(message.author.avatarURL)
.setDescription(`Gecikme: ${client.ws.ping+ "ms"} \n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"}`)
  .setImage('https://api.alexflipnote.dev/supreme?text='+ client.ws.ping +'%20Ping')
.setColor('GREEN')
.setFooter('QWEQW', client.user.avatarURL)
message.channel.send(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
};