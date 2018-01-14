const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    var hours = (new Date()).getHours();
    let adminRole = message.guild.roles.find("name", "Moderator")
    if(!message.member.roles.has(adminRole.id)) return message.channel.send("Sorry, you do not have the correct permissions!")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        var person = message.guild.member(message.author)
        if(!toMute) return message.channel.send("User was not found.. Make sure you mention a user or use their ID")

        let role = message.guild.roles.find(r => r.name === "Muted")
        if(!role){
            try{
                role = await message.guild.createRole({
                    name: "Muted",
                    color: "#000000",
                    permissions: []
                })

                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                })
            }catch(e){
                console.log(e.stack)
            }
        }
        if(toMute.roles.has(role.id)) return message.send("User is already muted!")

        toMute.addRole(role)

        for(let i in bot.logs) {
            if (!bot.logs[i] == message.guild.id) continue
            let templogs = bot.logs[i].logs_channel
            let logs = message.guild.channels.find("id",templogs)
        embed = new Discord.RichEmbed()
        embed.setTitle(`Muting!`)
        embed.addField(`Muted: `, `${message.author} Muted ${toMute} From Speaking :speak_no_evil:`)
        embed.addField(`Rank: `, `${person.highestRole}`)
        embed.addField(`Ran At: `, `${hours} hours into the day`)
        embed.setColor(`#ff0000`)
        logs.send({embed: embed})
        message.channel.send(`User: ${toMute} has been muted! :speak_no_evil:`)
        return
        }
}

module.exports.help = {
    name: "mute"
}
