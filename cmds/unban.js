const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    var hours = (new Date()).getHours();
    let adminRole = message.guild.roles.find("name", "Moderator")
    if(!message.member.roles.has(adminRole.id)) return message.channel.send("Sorry, you do not have the correct permissions!")

        let toKick = message.guild.members.get(args[0])
        var person = message.guild.member(message.author)

        message.guild.member(toKick).ban("You have been removed! If this is a mistake then send a message to the owner of  the discord!")

        message.channel.send(`UnBanned ${toKick}!`).then(message => message.delete(5000))
        for(let i in bot.logs) {
            if (!bot.logs[i] == message.guild.id) continue
            let templogs = bot.logs[i].logs_channel
            let logs = message.guild.channels.find("id",templogs)
        let logs = bot.channels.get("390535128322932746")
        embed = new Discord.RichEmbed()
        embed.setTitle(`Unbanning!`)
        embed.addField(`Unbanned: `, `${message.author} UnBanned ${toKick} from the server!`)
        embed.addField(`Rank: `, `${person.highestRole}`)
        embed.addField(`Ran At: `, `${hours} hours into the day`)
        embed.setColor(`#ff0000`)
        logs.send({embed: embed})
        }

        if (message.guild.bans.has(toKick)){
            console.log("Player is banned!")
        }

        return
}

module.exports.help = {
    name: "unban"
}
