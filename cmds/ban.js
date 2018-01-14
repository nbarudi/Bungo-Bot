const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    var hours = (new Date()).getHours();
        if(!message.member.roles.has("390535734093807636")) return message.channel.send("Sorry, you do not have the correct permissions!")

        let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!toKick) return message.channel.send("User was not found.. Make sure you mention a user or use their ID")
        var person = message.guild.member(message.author)

        message.guild.member(toKick).ban("You have been removed! If this is a mistake then send a message to the owner of  the discord!")

        message.channel.send(`Banned ${toKick}!`).then(message => message.delete(5000))
        let logs = bot.channels.get("name", "Logs")
        embed = new Discord.RichEmbed()
        embed.setTitle(`Banning!`)
        embed.addField(`Banned: `, `${message.author} Banned ${toKick} from the server!`)
        embed.addField(`Rank: `, `${person.highestRole}`)
        embed.addField(`Ran At: `, `${hours} hours into the day`)
        embed.setColor(`#ff0000`)
        logs.send({embed: embed})
        return
}

module.exports.help = {
    name: "ban"
}
