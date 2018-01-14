const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {

    let modRole = message.guild.roles.find("name", "Moderator")
    if(message.member.roles.has(modRole.id)){
        let announcement = args.join(" ")
    let announcechannel = bot.channels.get("390538433132625922")
    announcechannel.send("@everyone")
    embed = new Discord.RichEmbed()
    embed.setTimestamp()
    embed.setColor("#f442e2")
    embed.addField(`New announcement by: ${message.author.username}`, `${announcement}`)
    announcechannel.send({embed: embed})
    } else {
        message.channel.send(`${message.author}: You do not have permission to run this command! You must atleast have: ${modRole.name} to use w.announce`)
    }



}

module.exports.help = {
    name: "announce"
}