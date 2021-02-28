module.exports ={
    aliases: 'ul',
    callback: ({ message, args }) =>{
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send('You don\'t have Permission to do that')
        }
        const role = message.guild.roles.cache.get(`${message.guild.id}`)
        
            message.channel.updateOverwrite(role, {
                SEND_MESSAGES: true
            })
            message.channel.send('Unlocked the channel!')
}
}