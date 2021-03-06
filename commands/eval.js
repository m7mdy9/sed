const { MessageEmbed } = require('discord.js');

module.exports = {
    ownerOnly: true,
    name: 'eval',
    aliases: ["e"],
    minArgs: 1,
    maxArgs: -1,
    syntaxError: 'Incorrect syntax! Use `{PREFIX}eval <code or what ever>`',
    description: 'Evalutions a code',
    category: 'Owner',
    callback: async ({client, message, args}) => {
        
        if (message.author.id != '715466982123765822') return message.react('❌')
        const embed = new MessageEmbed()
            .setTitle('<a:loading:779681208954126357> Evaluating...')
            .setColor('#000000')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('Output: ')
                .setColor('#000000')
                .setDescription(await data)
            await msg.edit(embed)
            await msg.react('✔️')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✔️') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✔️':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('An Error has occured')
                .setColor('#000000')
            return await msg.edit(embed);

        }
    }
}