const Discord = module.require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let adminRole = message.guild.roles.find("name", "Administrator")
        if(!message.member.roles.has(adminRole.id)) return message.channel.send("Sorry, you do not have the correct permissions!")

        bot.logs[message.guild.id] = {
            logs_channel: message.channel.id
        }

        fs.writeFile("./logs.json", JSON.stringify(bot.logs, null, 4), err => {
            if(err) throw err;
            message.channel.send("Set logs to: " + message.channel)
        })

        return
}

module.exports.help = {
    name: "setlogs"
}