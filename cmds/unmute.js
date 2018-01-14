const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    var person = message.guild.member(message.author)
    var hours = (new Date()).getHours();

        if(!message.member.roles.has("390536021063761922")) return message.channel.send("Sorry, you do not have the correct permissions!")
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!toMute) return message.channel.send("User was not found.. Make sure you mention a user or use their ID")
        let role = message.guild.roles.find(r => r.name === "Muted")
        if(!role) return message.channel.send("There is no muted role. Consider making one or use the command !mute (User) to make one automatically")
        if(!toMute.roles.has(role.id)) return message.channel.send("User is not muted!")
        toMute.removeRole(role)
        message.channel.send(`User: ${toMute} has been unmuted! :monkey_face:`)
        let logs = bot.channels.get("390535128322932746")


        embed = new Discord.RichEmbed()
        embed.setTitle(`UnMuting!`)
        embed.addField(`UnMuted: `, `${message.author} UnMuted ${toMute} From Speaking :monkey_face:`)
        embed.addField(`Rank: `, `${person.highestRole}`)
        embed.addField(`Ran At: `, `${hours} hours into the day`)
        embed.setColor(`#ff0000`)
        logs.send({embed: embed})
        return
}

module.exports.help = {
    name: "unmute"
}