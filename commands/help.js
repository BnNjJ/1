const Discord = require("discord.js");
const config = require("../config.json");
let colour = config.colour;
let footer = config.footer;

module.exports.run = async (client, message, args) => {
  message.delete();

  let embed = new Discord.RichEmbed()
  .setTitle("Ticket Bot - Help")
  .setDescription("**Created by**: Flyz#0007\n**Donate(Btc)**: 15NcQk3qPrUhoU4hLZR3W52eCguQZb2Jbx\n**new** - Creates new ticket channel.\n**close** - Closes current ticket channel.\n**add (@member)** - Adds member to ticket.\n**remove (@member)** - Removes member from ticket")
  .setColor(colour)
  .setTimestamp()
  .setFooter(footer);

  message.channel.send(embed);

}
module.exports.help = {
  name: "help"
}
