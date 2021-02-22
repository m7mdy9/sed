const Discord = require('discord.js')
const WOKcommands = require("wokcommands");
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION'],
});

client.on('ready', () =>{
    console.log('me online')
    
    new WOKcommands (client, {
        commandsDir: "commands",
        featureDir: "F",
        showWarns: false
    })
    .setDefaultPrefix('$')
    .setBotOwner(['464029590470262806','715466982123765822','748087501641613383','492306801316855810'])
});
client.on('message', message =>{
    if (message.author.bot) return;
    if (message.guild.id != "745535441473896469") return;
    const channel = client.channels.cache.get("812403927357456404")
    channel.send(`User: **${message.author.tag}** ID: \`${message.author.id}\` \nChannel: <#${message.channel.id}> ChannelID: \`${message.channel.id}\`\nmsg: \n\`${message.content}\``)
});
client.on('message', message =>{
    if (message.guild.id != "745535441473896469") return;
    const channel = client.channels.cache.get("812427542001877022")
    channel.send(`User: **${message.author.tag}** ID: \`${message.author.id}\` \nChannel: <#${message.channel.id}> ChannelID: \`${message.channel.id}\`\nmsg: \n\`${message.content}\``)
})

client.login("Nzk1MDI1NzYyMzg5NDU4OTU1.X_DXcA.twH5dJ-GzNdzgJ8RXWmkjQa62Ic")