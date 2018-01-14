const Discord = module.require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    var hours = (new Date()).getHours();
        if(!message.member.roles.has("390535734093807636")) return message.channel.send("Sorry, you do not have the correct permissions!")

        let toKick = message.guild.members.get(args[0])
        var person = message.guild.member(message.author)

        message.guild.member(toKick).ban("You have been removed! If this is a mistake then send a message to the owner of  the discord!")

        message.channel.send(`Banned ${toKick}!`).then(message => message.delete(5000))
        let logs = bot.channels.get("390535128322932746")
        embed = new Discord.RichEmbed()
        embed.setTitle(`Unbanning!`)
        embed.addField(`Unbanned: `, `${message.author} UnBanned ${toKick} from the server!`)
        embed.addField(`Rank: `, `${person.highestRole}`)
        embed.addField(`Ran At: `, `${hours} hours into the day`)
        embed.setColor(`#ff0000`)
        logs.send({embed: embed})

        if (message.guild.bans.has(toKick)){
            console.log("Player is banned!")
        }

        return
}

module.exports.help = {
    name: "unban"
}