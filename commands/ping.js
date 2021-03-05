const { MessageEmbed } = require('discord.js');
var color = '#73CC58';
module.exports ={
    callback: ({ message, client }) =>{
        if (client.ws.ping > 250) {
            color = '#ff0000';
        }
        const embed = new MessageEmbed()
        .setTitle('Pong')
        .setDescription(`\`${client.ws.ping}\``)
        .setTimestamp()
        .setColor(color)
        .setFooter('Bot\'s ping')
        message.channel.send(embed)
    }
}