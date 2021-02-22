module.exports ={
    aliases: ["s"],
    ownerOnly: true,
    minArgs: 1,
    expectedArgs: "wrong usage how to use:{PREFIX}<channelID/Channel_mention> <msg>",
    callback: async ({ message, client, args, prefix }) =>{
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have premissions to do that!');
        const channel = client.channels.cache.get(args[0]) || message.mentions.channels.first()
        const mm = args.slice(1).join(" ")
        try {  
        channel.send(mm);
        }catch(e) {
            return message.reply('there is an error')
        }
    }
}