const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    var hours = (new Date()).getHours();
    let adminRole = message.guild.roles.find("name", "Moderator")
    if(!message.member.roles.has(adminRole.id)) return message.channel.send("Sorry, you do not have the correct permissions!")
    var newValue
    var person = message.guild.member(message.author)

    if(args.length === 0){
        console.log("No args given!")
        newValue = 2;
    } else {
        newValue = args[0]
        console.log(newValue)
    }

    let messagecount = newValue.toString()
    message.channel.fetchMessages({
        limit: messagecount
    }).then(messages => {
        message.channel.bulkDelete(messages)
        message.channel.send(`Deleted a total of ${messagecount} messages!`).then(message => message.delete(5000))
        console.log("Info Message Removed! Messages Removed As planned!")
    })

    

    for(let i in bot.logs) {
        if (!bot.logs[i] == message.guild.id) continue
        let templogs = bot.logs[i].logs_channel
        let logs = message.guild.channels.find("id",templogs)
        embed = new Discord.RichEmbed()
        embed.setTitle(`Purging!`)
        embed.addField(`Purge: `, `${message.author} Purged ${messagecount} messages!`)
        embed.addField(`Rank: `, `${person.highestRole}`)
        embed.addField(`Ran At: `, `${hours} hours into the day`)
        embed.setColor(`#ff0000`)
        logs.send({embed: embed})
    return
    }
    
}

module.exports.help = {
    name: "purge"
}
