const Discord = module.require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let adminRole = message.guild.roles.find("name", "Administrator")
        if(!message.member.roles.has(adminRole.id)) return message.channel.send("Sorry, you do not have the correct permissions!")

        bot.announce[message.guild.id] = {
            announce_channel: message.channel.id
        }

        fs.writeFile("./announce.json", JSON.stringify(bot.announce, null, 4), err => {
            if(err) throw err;
            message.channel.send("Set Announcement Channel to: " + message.channel)
        })

        return
}

module.exports.help = {
    name: "setannouncement"
}