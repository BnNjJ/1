const Discord = require("discord.js");
const config = require("../config.json");
let colour = config.colour;
let footer = config.footer;

module.exports.run = async (client, message, args) => {
  message.delete();

  let embed = new Discord.RichEmbed()
  .setTitle("HammerLock | Ticket - Invite Link")
  .setDescription("**Invite**: https://discordapp.com/oauth2/authorize?client_id=527120499377963028&permissions=268435488&scope=bot")
  .setTimestamp()
  .setFooter(footer);

  message.channel.send(embed);

}
module.exports.help = {
  name: "invite"
}
