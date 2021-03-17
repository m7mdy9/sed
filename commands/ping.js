const { MessageEmbed } = require('discord.js');

module.exports ={
    callback: ({ message, client }) =>{
        let color = '#73CC58';
        if (client.ws.ping >= 250) {
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