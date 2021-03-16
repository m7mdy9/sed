const Discord = require('discord.js')

module.exports ={
    ownerOnly: true,
    callback: ({ message, args, prefix }) =>{
        if (message.author.id != "715466982123765822") return message.reply('no')
        
        if (args[0] === "prefix") {
            return message.reply(`${prefix} is prefix`)
        }
        try{
            const embed = new Discord.MessageEmbed()
            .setTitle(`${args[0]}`)
            .setDescription(`${args[1]}`)
            .setFooter(`by ${message.author.tag}`)
            
            message.channel.send(embed)
        } catch(e){
            console.error(e)
            message.channel.send('ERROR')
        }
    }
}